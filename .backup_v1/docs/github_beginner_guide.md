# Beginner's Guide: Deploying to GitHub 🚀

Since you've never used GitHub, we will follow the easiest path. Think of GitHub as a "cloud storage" for your code that can also act as a web host.

---

## Step 1: Create Your Account
1.  Go to [GitHub.com](https://github.com/).
2.  Sign up with your email and choose a username (e.g., `opswithbima`).
3.  Verify your email.

---

## Step 2: Install "GitHub Desktop" (The Easy Way)
Since you are on Windows, you don't need to learn complex coding commands.
1.  Download and install [GitHub Desktop](https://desktop.github.com/).
2.  Log in with your new GitHub account.

---

## Step 3: Create a "Repository"
A **Repository** (or "Repo") is just a folder in the cloud for your project.
1.  On the GitHub website, click the **+** icon in the top right and select **New repository**.
2.  **Repository name**: Give it a name like `my-portfolio`.
3.  **Public/Private**: Keep it **Public** (required for free website hosting).
4.  Click **Create repository**.

---

## Step 4: Add Your Code
1.  Open **GitHub Desktop**.
2.  Go to `File` > `Clone Repository`.
3.  Select your new `my-portfolio` repo and click **Clone**. (This creates a folder on your computer connected to the cloud).
4.  **The Important Part**: Copy all the files from your current project folder (`c:\Users\hp\.gemini\antigravity\playground\empty-cosmos`) and paste them into the new folder GitHub Desktop just created.
5.  In GitHub Desktop, you will see all the files appear on the left. 
6.  Type "Initial Commit" in the summary box and click **Commit to main**.
7.  Click **Push origin** at the top. Your code is now safely on the internet!

---

## Step 5: Make it Live (GitHub Pages)
For a Vite project (like yours), we need to do one small "technical" tweak first.

### A. Update `vite.config.ts`
I can do this for you! We need to add a `base` property so the website knows where it is being hosted.
*   **Current status**: I will update this file in the next step to include `base: '/my-portfolio/'`.

### B. Activate GitHub Pages
1.  On your GitHub repository page on the website, go to **Settings**.
2.  Click **Pages** on the left sidebar.
3.  Under **Build and deployment** > **Source**, select **GitHub Actions**.
4.  GitHub will offer a "Static HTML" template. Since your site is a React app, it's best to use a specialized "GitHub Action" for Vite. 

> [!TIP]
> **Pro Tip**: To make this super easy, I can add a "Deployment Script" to your project. This script will automatically build and publish your site every time you save.

---

## Summary Checklist
- [ ] Registered on GitHub.com
- [ ] Installed GitHub Desktop
- [ ] Created `my-portfolio` repository
- [ ] Pushed code to the cloud

**Ready to start?** Once you've created your account and repository, let me know your repository name, and I will prepare the final "deployment script" for you!
