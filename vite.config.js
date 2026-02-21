import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Em GitHub Actions, GITHUB_REPOSITORY = "owner/repo-name"
  // O base precisa ser "/repo-name/" para GitHub Pages funcionar corretamente.
  // Localmente (sem a variável), usa "/" para não quebrar o dev server.
  base: process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
    : '/',
})
