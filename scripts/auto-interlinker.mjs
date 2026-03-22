import fs from 'fs';
import path from 'path';

const appDir = '/Users/ashwanikumar/Downloads/fitplan-india/app';
const targetDirs = [path.join(appDir, 'plans'), path.join(appDir, 'workouts'), path.join(appDir, 'ayurveda')];

const keywordMap = [
    { regex: /\b(PCOS)\b/g, url: "/plans/pcos" },
    { regex: /\b(PCOD)\b/g, url: "/plans/pcod" },
    { regex: /\b(Hypothyroidism|Underactive Thyroid)\b/gi, url: "/plans/hypothyroidism" },
    { regex: /\b(Hyperthyroidism|Overactive Thyroid)\b/gi, url: "/plans/hyperthyroidism" },
    { regex: /\b(Diabetes|Insulin Resistance)\b/gi, url: "/plans/diabetes" },
    { regex: /\b(Keto(genic)? Diet)\b/gi, url: "/plans/keto-diet" },
    { regex: /\b(Intermittent Fasting)\b/gi, url: "/plans/intermittent-fasting" },
    { regex: /\b(Thyroid)\b/gi, url: "/plans/thyroid" },
    { regex: /\b(Vegetarian Diet)\b/gi, url: "/plans/vegetarian" },
    { regex: /\b(Anti-Aging)\b/gi, url: "/plans/anti-aging" },
    { regex: /\b(Weight Loss)\b/gi, url: "/plans/weight-loss" },
    { regex: /\b(Ayurveda|Ayurvedic)\b/gi, url: "/ayurveda" },
    { regex: /\b(Dosha|Vata|Pitta|Kapha)\b/gi, url: "/ayurveda/doshas" }
];

function processDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file === 'page.tsx') {
            // Skip the hub pages entirely to protect them from unintended replacements
            if (dir === path.join(appDir, 'plans') || dir === path.join(appDir, 'workouts') || dir === path.join(appDir, 'ayurveda')) {
                continue;
            }
            optimizeLinks(fullPath);
        }
    }
}

function optimizeLinks(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // We only want to link a keyword ONCE per page to avoid spam.
    const usedUrls = new Set();
    
    // Get the current page URL to prevent a page from linking to itself
    const currentUrlPath = filePath.replace(appDir, '').replace('/page.tsx', '');
    
    // Tokenize the file by splitting on HTML/JSX tags.
    // Every even index (0, 2, 4...) is a text node. Every odd index (1, 3, 5...) is a tag.
    const parts = content.split(/(<[^>]+>)/g);
    
    let inLink = false;
    let inHeading = false;
    let hasChanges = false;
    let needsLinkImport = !content.includes('import Link from "next/link"');

    for (let i = 0; i < parts.length; i++) {
        if (i % 2 !== 0) {
            // It's a tag
            const tag = parts[i];
            if (tag.startsWith('<Link ') || tag.startsWith('<a ')) {
                inLink = true;
            } else if (tag.startsWith('</Link>') || tag.startsWith('</a>')) {
                inLink = false;
            }
            if (tag.match(/^<h[1-6]/)) {
                inHeading = true;
            } else if (tag.match(/^<\/h[1-6]/)) {
                inHeading = false;
            }
            continue;
        }

        // It's a text node.
        let text = parts[i];

        // Skip if we are inside a Link, heading, or if the text is empty/whitespace, 
        // or if it's part of a JavaScript block (like an import or comment).
        if (inLink || inHeading || !text.trim() || text.includes('import ') || text.trim().startsWith('//')) {
            continue;
        }

        // CRITICAL FIX: Skip JavaScript blocks, object arrays (like FAQs or Metadata), and functions.
        // True JSX text nodes (<p>Some text</p>) do not contain JS object syntax like '{', '}', or '=>'.
        if (text.includes('{') || text.includes('}') || text.includes('=>') || text.includes('="') || text.includes('`')) {
            continue;
        }

        // Process keywords
        for (const { regex, url } of keywordMap) {
            // Rule 1: Don't link a page to itself
            if (url === currentUrlPath) continue;
            
            // Rule 2: Only link once per url per page
            if (usedUrls.has(url)) continue;
            
            // If the text contains the keyword
            const match = regex.exec(text);
            if (match) {
                // We found a match in this text block! Replace the first occurrence only.
                // Reset regex state since it's global
                regex.lastIndex = 0;
                
                parts[i] = text.replace(regex, (fullMatch, p1) => {
                    // Make sure we only replace one
                    if (usedUrls.has(url)) return fullMatch;
                    
                    usedUrls.add(url);
                    hasChanges = true;
                    // Inject Next.js Link
                    return `<Link href="${url}" className="text-emerald-700 font-semibold hover:underline">${fullMatch}</Link>`;
                });
                
                // Update text reference for the next keyword check in this same block
                text = parts[i];
            }
            regex.lastIndex = 0; // Reset
        }
    }

    if (hasChanges) {
        let finalContent = parts.join('');
        
        // Add import Link if missing
        if (needsLinkImport) {
            // Find the last import statement and insert after it
            const importRegex = /import\s+.*?;?\n/g;
            let lastMatch = null;
            let m;
            while ((m = importRegex.exec(finalContent)) !== null) {
                lastMatch = m;
            }
            
            if (lastMatch) {
                const insertPos = lastMatch.index + lastMatch[0].length;
                finalContent = finalContent.slice(0, insertPos) + 'import Link from "next/link"\n' + finalContent.slice(insertPos);
            } else {
                // If no imports (rare in Next.js), just put at top
                finalContent = 'import Link from "next/link"\n' + finalContent;
            }
        }

        if (finalContent !== originalContent) {
            fs.writeFileSync(filePath, finalContent, 'utf8');
            console.log(`Linked ${usedUrls.size} keywords in ${currentUrlPath}`);
        }
    }
}

console.log("Starting Auto-Interlinker...");
targetDirs.forEach(processDirectory);
console.log("Finished interlinking execution.");
