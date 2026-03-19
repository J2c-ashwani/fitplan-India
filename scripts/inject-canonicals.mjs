import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.fitplanindia.com';
const appDir = '/Users/ashwanikumar/Downloads/fitplan-india/app';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('page.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const pageFiles = walk(appDir);
let modifiedCount = 0;

for (const file of pageFiles) {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Calculate relative path from app/ directory
  const relativePath = path.relative(appDir, file);
  
  // Convert OS paths to URL paths and remove page.tsx
  let urlPath = relativePath.replace(/\\/g, '/').replace(/\/page\.tsx$/, '').replace(/^page\.tsx$/, '');
  
  // Remove Next.js route groups like (marketing) from URL
  urlPath = urlPath.split('/').filter(segment => !segment.startsWith('(') && !segment.endsWith(')')).join('/');
  
  if (urlPath === '') continue; // Skip homepage
  if (urlPath.includes('[')) continue; // Skip dynamic routes like [slug]
  
  const fullUrl = `${BASE_URL}/${urlPath}`;

  // Use a simple regex check for existing alternates or canonicals
  if (content.includes('alternates:') || content.includes('canonical:')) {
    continue; // Already has it
  }

  // Inject if there's a Metadata export
  if (content.match(/export const metadata(?: *: *Metadata)? *= *\{/)) {
    const replacement = `export const metadata: Metadata = {\n  alternates: {\n    canonical: "${fullUrl}",\n  },`;
    
    // Check if Metadata type is imported, if not, we use plain JS syntax to avoid TS errors
    if (content.match(/export const metadata *: *Metadata *= *\{/)) {
      content = content.replace(/export const metadata *: *Metadata *= *\{/, replacement);
    } else {
      content = content.replace(/export const metadata *= *\{/, `export const metadata = {\n  alternates: {\n    canonical: "${fullUrl}",\n  },`);
    }

    fs.writeFileSync(file, content, 'utf-8');
    modifiedCount++;
    console.log(`✅ Injected canonical into /${urlPath}`);
  }
}

console.log(`\n🎉 Script finished. Modified ${modifiedCount} files.`);
