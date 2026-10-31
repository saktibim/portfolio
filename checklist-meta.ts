// Shared by the /checklist page (sections/Checklist.tsx) and the build step in vite.config.ts,
// which writes checklist.html so link previews (Instagram DMs, LinkedIn) see the right tags.
const SITE = 'https://www.opswithbima.com';

export const CHECKLIST_META = {
  path: '/checklist',
  title: 'Free Inventory Checklist for E-commerce & SMBs | Bima Sekti',
  description:
    'Free 8-check inventory checklist for e-commerce sellers and small businesses. Find dead stock, set reorder points and price from landed cost in 10 minutes.',
  url: `${SITE}/checklist`,
  image: `${SITE}/checklist-preview.png`,
  imageWidth: 1588,
  imageHeight: 2246,
  pdfPath: '/Inventory-Money-Leak-Checklist.pdf',
};
