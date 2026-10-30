import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages publishes this project under /KoboBridge/
  base: "/KoboBridge/",
  plugins: [react()]
});
