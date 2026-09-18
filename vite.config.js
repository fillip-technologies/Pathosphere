import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Without this Vite binds IPv6 loopback (::1) only, and browsers that
    // resolve `localhost` to 127.0.0.1 get ECONNREFUSED. `host: true` binds
    // every interface, so IPv4 works (and you can test on a phone over LAN).
    host: true,
    port: 5173,
  },
})
