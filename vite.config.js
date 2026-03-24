import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr({ include: '**/*.svg' }),
    react({
      babel: {
        plugins: [['babel-plugin-styled-components', { ssr: false, displayName: true }]],
      },
    }),
  ],
});
