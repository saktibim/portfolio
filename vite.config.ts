import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { CHECKLIST_META as C } from './checklist-meta';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

// Writes dist/checklist.html: a copy of index.html with the checklist's own title,
// description and Open Graph tags (vercel.json serves it for /checklist).
const checklistHtml = (): Plugin => ({
  name: 'checklist-html',
  enforce: 'post',
  generateBundle(_, bundle) {
    const index = bundle['index.html'];
    if (!index || index.type !== 'asset') return;

    const html = String(index.source)
      .replace(/<title>[^<]*<\/title>/, `<title>${esc(C.title)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(C.description)}$2`)
      .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${C.url}$2`)
      .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(C.title)}$2`)
      .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(C.description)}$2`)
      .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${C.image}$2`)
      .replace(
        '</head>',
        `    <meta property="og:image:width" content="${C.imageWidth}" />\n` +
          `    <meta property="og:image:height" content="${C.imageHeight}" />\n` +
          `    <link rel="canonical" href="${C.url}" />\n  </head>`,
      );

    this.emitFile({ type: 'asset', fileName: 'checklist.html', source: html });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checklistHtml()],
  base: '/',
});
