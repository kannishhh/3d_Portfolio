import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Optimize for production
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries for better caching
          vendor: ['react', 'react-dom'],
          three: ['@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
          gsap: ['gsap', '@gsap/react']
        }
      }
    },
    // Increase chunk size warning limit for 3D assets
    chunkSizeWarningLimit: 1000
  },
  // Optimize assets
  assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.hdr']
});
