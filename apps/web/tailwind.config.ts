import type { Config } from "tailwindcss";
import preset from "@config/tailwind.preset.cjs";

export default {
  presets: [preset as any],
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {}
  }
} satisfies Config;

