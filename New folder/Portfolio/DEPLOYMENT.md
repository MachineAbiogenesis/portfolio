# 🚀 Quick Deployment Guide

## Prerequisites
- GitHub account
- Git installed on your computer

## Step-by-Step Deployment

### 1. Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `Portfolio`
3. Description: "My professional portfolio website"
4. Keep it Public
5. **Don't** check "Initialize with README"
6. Click "Create repository"

### 2. Push Your Code to GitHub

Open PowerShell in your project directory and run:

```powershell
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial commit: Modern portfolio website"

# Rename branch to main
git branch -M main

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top right)
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source**: Select **GitHub Actions**
5. The GitHub Actions workflow will automatically run and deploy your site

### 4. Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 1-2 minutes)
4. Once complete, you'll see a green checkmark ✅

### 5. Access Your Live Portfolio

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/Portfolio/
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## 🔧 Important Notes

### If Your Repository Name is Different
If you named your repository something other than "Portfolio", you need to update `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',  // Change this
})
```

Then commit and push the change:
```powershell
git add vite.config.ts
git commit -m "Update base path"
git push
```

### Update Certification Links
Before deploying, update the certification links in `src/components/Certifications.tsx` with your actual credential URLs.

## 🎨 Customization After Deployment

Any time you want to update your portfolio:

1. Make changes to your files
2. Commit and push:
   ```powershell
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. GitHub Actions will automatically redeploy your site

## 🆘 Troubleshooting

### Site Not Loading?
- Check that GitHub Pages is enabled in Settings → Pages
- Verify the workflow completed successfully in the Actions tab
- Make sure the `base` path in `vite.config.ts` matches your repository name

### 404 Error?
- Ensure you're using the correct URL format: `https://USERNAME.github.io/REPO_NAME/`
- Check that the repository is public

### Workflow Failed?
- Go to Actions tab and click on the failed workflow
- Check the error logs
- Common issue: Make sure GitHub Pages is set to "GitHub Actions" as the source

## 📱 Share Your Portfolio

Once deployed, share your portfolio:
- Add the link to your LinkedIn profile
- Include it in your resume
- Share it in job applications
- Add it to your email signature

---

**Need Help?** Check the full [README.md](README.md) for more details.
