import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        //todo: 경로 설정
        additionalData: `@import '/src/styles/index.scss';`,
      },
    },
  },
});
