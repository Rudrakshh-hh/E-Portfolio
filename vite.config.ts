import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: '/E-Portfolio/', // 👈 add this line
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'), // only keep src alias
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    // bind to all addresses so the dev server is reachable from localhost and LAN IPs
    host: true,
    port: 3000,
    open: true,
    // make HMR websocket settings explicit to avoid client trying the wrong ws host
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 3000,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setupTests.ts',
    include: ['src/**/*.test.{ts,tsx}', 'test/**/*.test.{ts,tsx}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
