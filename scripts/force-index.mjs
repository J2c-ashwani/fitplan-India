import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

async function forceIndex() {
  // Use absolute path to ensure we always find the credentials regardless of Cwd
  const credentialsPath = '/Users/ashwanikumar/Downloads/fitplan-india/scripts/credentials.json';
  
  if (!fs.existsSync(credentialsPath)) {
    console.error("❌ credentials.json not found in scripts directory.");
    process.exit(1);
  }

  const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

  // Define the required scopes for Indexing API
  const jwtClient = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  console.log("Authenticating with Google Cloud Service Account...");
  try {
    await jwtClient.authorize();
    console.log("✅ Authentication successful.");
  } catch (err) {
    console.error("❌ Authentication failed:", err.message);
    process.exit(1);
  }

  console.log("Fetching live sitemap from https://www.fitplanindia.com/sitemap.xml...");
  let xml = "";
  try {
    const response = await fetch('https://www.fitplanindia.com/sitemap.xml');
    xml = await response.text();
  } catch (err) {
    console.error("❌ Failed to fetch sitemap:", err.message);
    process.exit(1);
  }

  // Extract URLs using regex
  const urls = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
      urls.push(match[1]);
  }

  console.log(`📡 Found ${urls.length} URLs in sitemap.`);
  if (urls.length === 0) {
      console.log("No URLs found to index.");
      process.exit(0);
  }

  console.log("🚀 Initiating URL_UPDATED Indexing API requests (Priority Crawl Queue)...");
  
  const indexing = google.indexing('v3');
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try {
      await indexing.urlNotifications.publish({
        auth: jwtClient,
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      successCount++;
      process.stdout.write(`✅ [${i + 1}/${urls.length}] Enqueued: ${url}\n`);
    } catch (error) {
      errorCount++;
      process.stdout.write(`❌ [${i + 1}/${urls.length}] Error on ${url}: ${error.message}\n`);
      // If we get a 403, it means the user forgot to add the service account as an Owner in GSC.
      if (error.message.includes("Permission denied")) {
         console.log("\n⚠️ FATAL ERROR: Google rejected the request because the Service Account is not an OWNER in Search Console.");
         console.log(`Please go to Google Search Console -> Settings -> Users & Permissions -> Add User.`);
         console.log(`Email to add: ${credentials.client_email}`);
         console.log(`Permission level MUST be: Owner`);
         process.exit(1);
      }
    }
    
    // 250ms delay to prevent Google 429 Too Many Requests (Quota limit protects)
    await new Promise(r => setTimeout(r, 250));
  }

  console.log(`\n🎉 Indexing API Complete!`);
  console.log(`Successfully pinged: ${successCount} URLs`);
  if (errorCount > 0) {
    console.log(`Errors encountered: ${errorCount}`);
  } else {
    console.log(`Google bots have been notified. Expect recrawls to begin within 24-48 hours.`);
  }
}

forceIndex().catch(console.error);
