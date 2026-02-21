import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Base do subpath no GitHub Pages.
  // Use VITE_BASE=/ no .env.local para dev sem o prefixo (opcional).
  base: process.env.VITE_BASE ?? "/sarah-birthday-2026/",
});
