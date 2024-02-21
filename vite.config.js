import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  define: {
    global: {},
    BACKEND_URL: JSON.stringify(process.env.VITE_API_URL),
    RAJORPAY: JSON.stringify(process.env.VITE_RAJORPAY),
  },
});
