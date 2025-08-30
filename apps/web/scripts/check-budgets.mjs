import { statSync, readdirSync } from "fs";
import { join } from "path";

const JS_BUDGET_KB = 90; // interactive JS (gzip) – approximate raw fallback here

function kb(n) { return Math.round((n / 1024) * 10) / 10; }

function main() {
  const dir = ".next/static/chunks";
  let total = 0;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".js")) continue;
    const s = statSync(join(dir, f));
    total += s.size;
  }
  const totalKB = kb(total);
  console.log(`Total JS (raw, chunks): ${totalKB} KB`);
  if (totalKB > JS_BUDGET_KB) {
    console.error(`Exceeded JS budget (${JS_BUDGET_KB} KB)`);
    process.exit(1);
  }
}

try { main(); } catch (e) { console.error("Budget check failed:", e); process.exit(1); }

