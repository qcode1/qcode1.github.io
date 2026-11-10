import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages can't send custom response headers, so the Content Security
// Policy ships as a <meta> tag. It is only added to production builds because
// the dev server relies on inline scripts for hot reloading.
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
  'upgrade-insecure-requests',
].join('; ');

const cspPlugin = {
  name: 'inject-csp',
  apply: 'build',
  transformIndexHtml(html) {
    return html.replace(
      '<meta charset="utf-8" />',
      `<meta charset="utf-8" />\n    <meta http-equiv="Content-Security-Policy" content="${CSP}" />`
    );
  },
};

export default defineConfig({
  plugins: [react(), cspPlugin],
  base: './',
  server: { port: 3000, open: true },
  build: { outDir: 'build', sourcemap: false },
});
