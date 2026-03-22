import fs from 'fs';
import path from 'path';

const appDir = '/Users/ashwanikumar/Downloads/fitplan-india/app';
const targetDirs = [path.join(appDir, 'plans'), path.join(appDir, 'workouts'), path.join(appDir, 'ayurveda')];

const powerWords = [
    "[Free 7-Day Plan]",
    "| Expert Guide 2025",
    "| Fast Results",
    "| Proven Methods",
    "| Step-by-Step Guide",
    "[100% Free Guide]"
];

function getRandomPowerWord() {
    return powerWords[Math.floor(Math.random() * powerWords.length)];
}

function processDirectory(dir) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file === 'page.tsx') {
            optimizeMetadata(fullPath);
        }
    }
}

function optimizeMetadata(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file exports metadata
    if (!content.includes('export const metadata') && !content.includes('export const metadata: Metadata')) {
        return; // Skip if no metadata block
    }

    // Find the title line
    const titleRegex = /title:\s*["']([^"']+)["']/;
    const match = content.match(titleRegex);

    if (match) {
        let currentTitle = match[1];
        
        // Skip if already optimized with a bracket or year to prevent double-appending
        if (currentTitle.includes('[') || (currentTitle.includes('2025') && currentTitle.includes('|'))) {
            // Already mostly optimized, but let's ensure it has a strong CTR suffix if missing brackets
            if (!currentTitle.includes('[') && !currentTitle.includes('Guide') && currentTitle.length < 50) {
                 const powerSuffix = getRandomPowerWord();
                 const newTitle = `${currentTitle} ${powerSuffix}`.trim();
                 content = content.replace(`title: "${currentTitle}"`, `title: "${newTitle}"`);
                 content = content.replace(`title: '${currentTitle}'`, `title: "${newTitle}"`);
                 console.log(`Optimized: ${filePath} -> ${newTitle}`);
                 fs.writeFileSync(filePath, content, 'utf8');
            }
            return;
        }

        const powerSuffix = getRandomPowerWord();
        
        // Ensure the title doesn't get ridiculously long (> 60 chars is bad for SEO)
        let newTitle = "";
        
        // If it already has FitPlan India, remove it so we can add our powerful suffix, Google figures out the brand itself
        currentTitle = currentTitle.replace(/\s*\|\s*FitPlan India/i, '');
        currentTitle = currentTitle.replace(/\s*-\s*FitPlan India/i, '');

        if (currentTitle.length + powerSuffix.length > 65) {
             // Just append 2025 if it's already super long
             newTitle = currentTitle.includes('2025') ? currentTitle : `${currentTitle} 2025`;
        } else {
             newTitle = `${currentTitle} ${powerSuffix}`;
        }

        content = content.replace(`title: "${match[1]}"`, `title: "${newTitle}"`);
        content = content.replace(`title: '${match[1]}'`, `title: "${newTitle}"`);
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Optimized: ${filePath}\n  Old: ${match[1]}\n  New: ${newTitle}`);
    }
}

console.log("Starting aggressive CTR Metadata optimization...");
targetDirs.forEach(processDirectory);
console.log("Optimization complete.");
