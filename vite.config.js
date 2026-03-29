import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Raiz por padrão (Vercel e builds locais). Para GitHub Pages na subpasta, rode o build com:
//   VITE_BASE=/P.Portifolio/ npm run build
function normalizeBase(value) {
  const p = value?.trim() || "/"
  if (p === "/") return "/"
  return p.endsWith("/") ? p : `${p}/`
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: normalizeBase(process.env.VITE_BASE),
})