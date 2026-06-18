const path = require("node:path");
const fs = require("node:fs");
const Module = require("node:module");

const runtimeRoot = "C:/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules";
const runtimeModules = [
  runtimeRoot,
  `${runtimeRoot}/.pnpm/detect-libc@2.1.2/node_modules`,
  `${runtimeRoot}/.pnpm/semver@7.8.1/node_modules`,
  `${runtimeRoot}/.pnpm/@img+colour@1.1.0/node_modules`,
  `${runtimeRoot}/.pnpm/@img+sharp-win32-x64@0.34.5/node_modules`,
];
process.env.NODE_PATH = [process.env.NODE_PATH, ...runtimeModules].filter(Boolean).join(path.delimiter);
Module._initPaths();

const sharp = require("sharp");

const out = path.resolve(__dirname, "../outputs/assets/futuristic-interface.png");
fs.mkdirSync(path.dirname(out), { recursive: true });

const svg = String.raw`
<svg width="1400" height="1400" viewBox="0 0 1400 1400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="core" cx="50%" cy="46%" r="54%">
      <stop offset="0%" stop-color="#fff1b8" stop-opacity="0.96"/>
      <stop offset="18%" stop-color="#ffb84a" stop-opacity="0.76"/>
      <stop offset="42%" stop-color="#9a72ff" stop-opacity="0.56"/>
      <stop offset="72%" stop-color="#62e6ff" stop-opacity="0.24"/>
      <stop offset="100%" stop-color="#060916" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="panel" x1="120" y1="80" x2="1240" y2="1320" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffffff" stop-opacity="0.28"/>
      <stop offset="0.45" stop-color="#9a72ff" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#62e6ff" stop-opacity="0.11"/>
    </linearGradient>
    <linearGradient id="accent" x1="296" y1="308" x2="1080" y2="1078" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffb84a"/>
      <stop offset="0.48" stop-color="#ff7a3d"/>
      <stop offset="1" stop-color="#62e6ff"/>
    </linearGradient>
    <filter id="blurGlow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="28" result="blur"/>
      <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0.38 0 1 0 0 0.84 0 0 1 0 1 0 0 0 0.85 0"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="36" stdDeviation="34" flood-color="#000000" flood-opacity="0.45"/>
    </filter>
    <pattern id="grid" width="72" height="72" patternUnits="userSpaceOnUse">
      <path d="M72 0H0V72" fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="2"/>
    </pattern>
  </defs>

  <rect width="1400" height="1400" fill="transparent"/>
  <ellipse cx="700" cy="760" rx="510" ry="480" fill="#060916" opacity="0.58"/>
  <circle cx="700" cy="650" r="520" fill="url(#core)" opacity="0.92"/>
  <circle cx="700" cy="650" r="470" fill="url(#grid)" opacity="0.48"/>

  <g filter="url(#softShadow)">
    <path d="M313 277C442 186 959 177 1097 285C1235 392 1239 985 1098 1108C957 1232 424 1243 303 1116C181 989 185 368 313 277Z" fill="url(#panel)" stroke="#ffffff" stroke-opacity="0.38" stroke-width="3"/>
    <path d="M361 337C486 259 914 250 1039 341C1165 431 1168 945 1040 1045C912 1144 487 1156 366 1048C245 941 236 416 361 337Z" fill="#090d24" opacity="0.62" stroke="#62e6ff" stroke-opacity="0.32" stroke-width="3"/>
  </g>

  <g filter="url(#blurGlow)">
    <circle cx="700" cy="653" r="238" fill="none" stroke="url(#accent)" stroke-width="18" stroke-linecap="round" stroke-dasharray="510 210 120 180"/>
    <circle cx="700" cy="653" r="162" fill="none" stroke="#62e6ff" stroke-opacity="0.85" stroke-width="8" stroke-dasharray="90 58"/>
    <circle cx="700" cy="653" r="74" fill="#ffb84a" opacity="0.92"/>
    <circle cx="700" cy="653" r="36" fill="#fff8dd"/>
  </g>

  <g opacity="0.9" stroke-linecap="round">
    <path d="M700 416V205" stroke="#62e6ff" stroke-opacity="0.68" stroke-width="5"/>
    <path d="M700 888V1132" stroke="#ffb84a" stroke-opacity="0.62" stroke-width="5"/>
    <path d="M463 652H215" stroke="#9a72ff" stroke-opacity="0.65" stroke-width="5"/>
    <path d="M936 652H1180" stroke="#62e6ff" stroke-opacity="0.72" stroke-width="5"/>
    <circle cx="700" cy="205" r="18" fill="#62e6ff"/>
    <circle cx="700" cy="1132" r="18" fill="#ffb84a"/>
    <circle cx="215" cy="652" r="18" fill="#9a72ff"/>
    <circle cx="1180" cy="652" r="18" fill="#62e6ff"/>
  </g>

  <g>
    <rect x="212" y="262" width="246" height="112" rx="34" fill="#ffffff" fill-opacity="0.16" stroke="#ffffff" stroke-opacity="0.28" stroke-width="3"/>
    <rect x="940" y="830" width="246" height="112" rx="34" fill="#ffffff" fill-opacity="0.15" stroke="#ffffff" stroke-opacity="0.26" stroke-width="3"/>
    <rect x="248" y="968" width="292" height="118" rx="36" fill="#ffffff" fill-opacity="0.13" stroke="#ffb84a" stroke-opacity="0.36" stroke-width="3"/>
    <rect x="878" y="224" width="292" height="118" rx="36" fill="#ffffff" fill-opacity="0.13" stroke="#62e6ff" stroke-opacity="0.38" stroke-width="3"/>
    <path d="M267 319H402M988 887H1124M307 1027H482M938 283H1110" stroke="#ffffff" stroke-opacity="0.7" stroke-width="9" stroke-linecap="round"/>
    <path d="M267 345H365M988 913H1078M307 1053H432M938 309H1045" stroke="#c8d0ff" stroke-opacity="0.55" stroke-width="6" stroke-linecap="round"/>
  </g>

  <g opacity="0.76">
    <circle cx="427" cy="489" r="9" fill="#ffb84a"/>
    <circle cx="971" cy="535" r="9" fill="#62e6ff"/>
    <circle cx="442" cy="790" r="9" fill="#62e6ff"/>
    <circle cx="1003" cy="705" r="9" fill="#ff7a3d"/>
    <circle cx="574" cy="1020" r="8" fill="#9a72ff"/>
    <circle cx="826" cy="310" r="8" fill="#ffb84a"/>
  </g>
</svg>`;

sharp(Buffer.from(svg))
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .resize(1400, 1400)
  .toFile(out)
  .then(() => console.log(out))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
