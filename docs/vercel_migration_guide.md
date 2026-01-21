# Migration Guide: GitHub Pages → Vercel

Since you have purchased **opswithbima.com**, Vercel is the best platform to host your site. It makes connecting a custom domain 10x easier than GitHub Pages.

---

## Part 1: Prepare Your Code (I have already done this)
I updated your `vite.config.ts` file to work with a custom domain.
1.  Open **GitHub Desktop**.
2.  Commit the change: **"Prepare for Vercel"**.
3.  Click **Push origin**.

---

## Part 2: Connect Vercel to GitHub
1.  Go to [vercel.com/signup](https://vercel.com/signup) and check "Hobby" (Free).
2.  **Continue with GitHub**.
3.  Follow the authorization steps.
4.  On your Vercel Dashboard, click **Add New...** > **Project**.
5.  You will see your `portfolio` repository from GitHub. Click **Import**.
6.  **Framework Preset**: It should auto-detect "Vite". If not, select it.
7.  Click **Deploy**.

> [!TIP]
> **Wait!** It might deploy to a weird URL first (like `portfolio-xyz.vercel.app`). That's normal.

---

## Part 3: Connect Your Domain
1.  On your new Vercel Project Dashboard, click **Settings** (top tab).
2.  Click **Domains** (left sidebar).
3.  Type `opswithbima.com` in the box and click **Add**.
4.  Vercel will give you two "Nameservers" (usually `ns1.vercel-dns.com` and `ns2.vercel-dns.com`).

---

## Part 4: Point Hostinger to Vercel
1.  Go to your **Hostinger Dashboard**.
2.  Find your domain (`opswithbima.com`).
3.  Look for **"Nameservers"** (NOT DNS Zone).
4.  Select **"Custom Nameservers"** (or Change Nameservers).
5.  Paste the two Vercel nameservers you got in Step 3.
6.  Click **Save**.

**That's it!** It can take up to 24 hours to work globally, but usually works in 1 hour. Vercel will automatically handle all the security (SSL) for you.
