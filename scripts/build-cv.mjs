// Prints scripts/public-cv.html to public/Melissa-CV-Web.pdf with a local Edge or Chrome.
// Run `npm run cv` after editing the HTML, then check the PDF remains within two pages.
// `npm run og` instead screenshots scripts/og-image.html to public/og-image.png.
// Optional: set BROWSER to a Chromium-based executable path.
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const input = pathToFileURL(`${root}scripts/public-cv.html`).href;
const output = `${root}public/Melissa-CV-Web.pdf`;

const candidates = [
  process.env.BROWSER,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

const browser = candidates.find((p) => existsSync(p));
if (!browser) {
  console.error('No Edge or Chrome found. Set BROWSER to a Chromium-based browser path.');
  process.exit(1);
}

if (process.argv.includes('--og')) {
  const ogInput = pathToFileURL(`${root}scripts/og-image.html`).href;
  const ogOutput = `${root}public/og-image.png`;
  execFileSync(browser, ['--headless', '--disable-gpu', '--hide-scrollbars', '--window-size=1200,630', `--screenshot=${ogOutput}`, ogInput], { stdio: 'ignore' });
  console.log(`Social preview written to ${ogOutput}`);
} else {
  execFileSync(browser, ['--headless', '--disable-gpu', '--no-pdf-header-footer', `--print-to-pdf=${output}`, input], { stdio: 'ignore' });
  console.log(`CV written to ${output}`);
}
