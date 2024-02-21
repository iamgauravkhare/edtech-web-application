import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  define: {
    global: {},
    BACKEND_URL: process.env.VITE_API_URL,
    RAJORPAY: process.env.VITE_RAJORPAY,
  },
});
