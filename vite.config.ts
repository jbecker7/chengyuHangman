import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "http://www.jbecker.me/hangman",
  plugins: [react()],
})
