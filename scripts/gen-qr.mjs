#!/usr/bin/env node
import QRCode from "qrcode";
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");

const url =
  process.env.SLIDES_URL || "https://koldovsky.github.io/2026-udc-01-current-state-ai-sdlc-slidev/";

const outPath = join(root, "public", "slides-qr.svg");
await mkdir(dirname(outPath), { recursive: true });

const svg = await QRCode.toString(url, {
  type: "svg",
  errorCorrectionLevel: "M",
  margin: 1,
  color: { dark: "#000000", light: "#ffffff" },
});

await writeFile(outPath, svg);
console.log(`QR generated for ${url}`);
console.log(`  -> ${outPath}`);
