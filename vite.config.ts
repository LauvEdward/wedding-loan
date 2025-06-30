// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/wedding-loan/', // 👈 để các asset hoạt động đúng khi deploy vào subfolder
})
