import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lexicon-assignments/radio-react/',
  plugins: [react()],
});
