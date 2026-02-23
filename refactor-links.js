const fs = require('fs');
const path = require('path');

const targetDirs = [
    path.join(__dirname, 'app', 'workouts'),
    path.join(__dirname, 'app', 'plans')
];

function processDirectory(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
        if (item.isDirectory()) {
            const slug = item.name;
            const pagePath = path.join(dir, slug, 'page.tsx');

            if (fs.existsSync(pagePath)) {
                let content = fs.readFileSync(pagePath, 'utf-8');
                let modified = false;

                if (content.includes('import RelatedContent from "@/components/RelatedContent"')) {
                    content = content.replace(
                        'import RelatedContent from "@/components/RelatedContent"',
                        'import DynamicRelatedContent from "@/components/DynamicRelatedContent"'
                    );
                    modified = true;
                }

                if (content.includes('<RelatedContent />')) {
                    content = content.replace(
                        '<RelatedContent />',
                        `<DynamicRelatedContent topic="${slug}" />`
                    );
                    modified = true;
                }

                if (modified) {
                    fs.writeFileSync(pagePath, content, 'utf-8');
                    console.log(`Updated: ${pagePath}`);
                }
            }
        }
    }
}

targetDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        processDirectory(dir);
    }
});

console.log('Refactoring complete.');
