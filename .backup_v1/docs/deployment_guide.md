# Deployment Guide: Taking Your Portfolio Live

Your website is built using **Vite + React + Tailwind CSS**, which makes it extremely easy to deploy on modern hosting platforms. My recommendation is to use **Vercel** or **Netlify** for a fast, free, and high-performance deployment.

---

## Option 1: Vercel (Recommended)
Vercel is the easiest way to deploy and offers great performance.

### A. Automatic Deployment (via GitHub)
1. **GitHub**: Push your code to a GitHub repository.
2. **Vercel**: Go to [vercel.com](https://vercel.com) and sign in.
3. **Import**: Click "Add New" > "Project" and select your GitHub repo.
4. **Deploy**: Vercel will auto-detect Vite settings. Just click **Deploy**.
   * *Every time you push code to GitHub in the future, your site will update automatically.*

### B. Manual Command Line Deployment
If you don't want to use GitHub, you can deploy directly from your terminal:
1. Open PowerShell and navigate to your project folder.
2. Run: `npx vercel`
3. Follow the prompts to log in and deploy.

---

## Option 2: Netlify
Netlify is a powerful alternative with a very simple drag-and-drop interface.

### A. Drag-and-Drop (No GitHub needed)
1. **Build**: In your terminal, run: `npm run build`
2. **Result**: This will create a `dist` folder in your project directory.
3. **Upload**: Go to [app.netlify.com/drop](https://app.netlify.com/drop).
4. **Deploy**: Drag the `dist` folder directly onto the page. Your site will be live instantly!

### B. Continuous Deployment
1. Connect your GitHub repository exactly like the Vercel steps above.
2. Select the repository and click **Deploy Site**.

---

## Critical Deployment Settings
Regardless of the platform you choose, ensure these settings are used (they are usually auto-detected):
*   **Build Command:** `npm run build`
*   **Publish Directory:** `dist`
*   **Node.js Version:** 18 or higher

---

## Next Steps
1. **Domain Name**: Once live, you can connect your own domain (e.g., `opswithbima.com`) through the settings panel of Vercel or Netlify.
2. **Analytics**: Both platforms provide free analytics tools to see who is visiting your site.

**Need help with one of these steps?** Just ask, and I can walk you through it!
