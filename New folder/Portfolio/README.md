# Niraj Aher - Portfolio Website

A modern, minimalistic portfolio website built with React, TypeScript, and Vite. Features a stunning dark theme with glassmorphism effects, smooth animations, and responsive design.

## 🚀 Features

- **Modern Design**: Dark theme with purple/blue gradients and glassmorphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Animated**: Smooth scroll animations and interactive micro-interactions
- **TypeScript**: Built with TypeScript for type safety
- **Fast**: Powered by Vite for lightning-fast development and builds
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📋 Sections

- **Hero**: Animated introduction with typing effect
- **About**: Professional summary and highlights
- **Skills**: Categorized technology stack
- **Experience**: Timeline of work history
- **Projects**: Showcase of featured projects
- **Certifications**: Professional certifications with links
- **Contact**: Contact information and social links

## 🛠️ Technologies Used

- React 18
- TypeScript
- Vite
- CSS3 (Custom Properties, Animations)
- GitHub Pages (Deployment)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` folder.

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project is configured with GitHub Actions for automatic deployment:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow will automatically deploy your site

3. **Access your site**:
   - Your portfolio will be available at: `https://YOUR_USERNAME.github.io/Portfolio/`

### Manual Deployment

Alternatively, you can deploy manually using gh-pages:

```bash
npm run build
npm run deploy
```

## ⚙️ Configuration

### Update Base Path

If your repository name is different from "Portfolio", update the `base` path in `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',
})
```

### Customize Content

Update the following files to customize your portfolio:

- **Personal Info**: Edit components in `src/components/`
- **Colors**: Modify CSS variables in `src/index.css`
- **Resume Data**: Update content in each component file

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: ≤ 480px

## 🎨 Color Palette

- **Primary Background**: `#0a0a0f`
- **Secondary Background**: `#13131a`
- **Accent Primary**: `#8b5cf6` (Purple)
- **Accent Secondary**: `#3b82f6` (Blue)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#b4b4c8`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Niraj Aher**
- LinkedIn: [linkedin.com/in/nirajaher](https://linkedin.com/in/nirajaher)
- Email: niraj.aher@gmail.com
- Location: Mumbai / Pune

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with vanilla CSS
- Deployed on [GitHub Pages](https://pages.github.com/)

---

Made with ❤️ by Niraj Aher
