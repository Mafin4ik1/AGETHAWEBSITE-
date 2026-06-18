const path = require("node:path");
const Module = require("node:module");

const runtimeRoot = "C:/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules";
const runtimeModules = [
  runtimeRoot,
  `${runtimeRoot}/.pnpm/playwright-core@1.60.0/node_modules`,
];
process.env.NODE_PATH = [process.env.NODE_PATH, ...runtimeModules].filter(Boolean).join(path.delimiter);
Module._initPaths();

const { chromium } = require("playwright");

const pagePath = path.resolve(__dirname, "../outputs/index.html");
const outputRoot = path.resolve(__dirname, "../outputs");
const fileUrl = `file:///${pagePath.replace(/\\/g, "/")}`;

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const viewport of [
    { name: "desktop", width: 1440, height: 1100 },
    { name: "mobile", width: 390, height: 1200 },
  ]) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
    await page.goto(fileUrl, { waitUntil: "networkidle" });
    await page.screenshot({
      path: path.join(outputRoot, `preview-${viewport.name}.png`),
      fullPage: true,
    });

    const result = await page.evaluate(() => {
      const overflow = document.documentElement.scrollWidth - document.documentElement.clientWidth;
      const img = document.querySelector(".hero-media");
      const buttonRects = [...document.querySelectorAll(".button, .nav-action")].map((el) => {
        const rect = el.getBoundingClientRect();
        return { width: Math.round(rect.width), height: Math.round(rect.height), text: el.textContent.trim() };
      });
      return {
        title: document.title,
        overflow,
        imageComplete: Boolean(img && img.complete && img.naturalWidth > 0),
        imageWidth: img ? img.naturalWidth : 0,
        minButtonHeight: Math.min(...buttonRects.map((rect) => rect.height)),
        buttonRects,
      };
    });

    results.push({ viewport: viewport.name, ...result });
    await page.close();
  }

  await browser.close();
  console.log(JSON.stringify({ fileUrl, results }, null, 2));
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
