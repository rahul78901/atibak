import react from '@vitejs/plugin-react';

import path from 'path';
import { defineConfig } from 'vite';

const src = path.join(__dirname, 'src');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(src, 'components'),
      '#': path.resolve(src, 'screens'),
      '₹': path.resolve(src, 'icons'),
    },
  },
});
