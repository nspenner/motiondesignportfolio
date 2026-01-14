# Motion Design Portfolio

A modern, elegant portfolio website for video editors and motion designers. Built with Astro, featuring Vimeo video embeds and Pages CMS for easy content management.

## ✨ Features

- **Modern Design**: Dark, elegant theme optimized for showcasing video content
- **Vimeo Integration**: Responsive video embeds with lazy loading
- **Content Management**: Easy editing via [Pages CMS](https://pagescms.org)
- **Filterable Portfolio**: Filter projects by category (Commercial, Music Video, Documentary, etc.)
- **Fully Responsive**: Mobile-first design that works on all devices
- **Fast & Static**: Built with Astro for optimal performance
- **GitHub Pages Ready**: Automatic deployment via GitHub Actions

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/nspenner/motiondesignportfolio.git
   cd motiondesignportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📝 Managing Content

### Using Pages CMS

1. Visit [pagescms.org](https://pagescms.org) and log in with your GitHub account
2. Select this repository
3. Start editing your projects and content directly in the browser
4. Changes are automatically committed to your repository

### Adding Projects Manually

1. Create a new `.md` file in `src/content/projects/`
2. Add frontmatter with project details:

```markdown
---
title: "Your Project Title"
description: "Project description"
vimeoId: "123456789"
category: "Commercial"
client: "Client Name"
date: 2024-01-15
featured: true
---

## Project Overview
Your project details here...
```

3. The `vimeoId` is the number from your Vimeo URL (e.g., `vimeo.com/123456789`)

### Project Categories

- Commercial
- Music Video
- Documentary
- Short Film
- Corporate

## 🎨 Customization

### Site Configuration

Edit `astro.config.mjs` to update:
- Site URL
- Base path (for GitHub Pages)
- Build settings

### Styling

- Global styles: `src/styles/global.css`
- CSS variables in `:root` for easy theming
- Component-specific styles in each `.astro` file

### Content

- **Footer**: Edit social links in `src/components/Footer.astro`
- **Navigation**: Modify nav items in `src/components/Navigation.astro`
- **About Page**: Update bio and skills in `src/pages/about.astro`
- **Contact Page**: Update contact info in `src/pages/contact.astro`

## 🏗️ Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── public/
│   └── favicon.svg             # Site favicon
├── src/
│   ├── components/
│   │   ├── Footer.astro        # Site footer
│   │   ├── Navigation.astro    # Site header/nav
│   │   ├── ProjectCard.astro   # Portfolio grid item
│   │   └── VideoEmbed.astro    # Vimeo player component
│   ├── content/
│   │   ├── config.ts           # Content collection schema
│   │   └── projects/           # Project markdown files
│   ├── layouts/
│   │   └── BaseLayout.astro    # Main layout wrapper
│   ├── pages/
│   │   ├── index.astro         # Home page
│   │   ├── portfolio.astro     # Portfolio gallery
│   │   ├── about.astro         # About page
│   │   ├── contact.astro       # Contact page
│   │   └── projects/
│   │       └── [slug].astro    # Dynamic project pages
│   └── styles/
│       └── global.css          # Global styles
├── .pages.yml                  # Pages CMS configuration
├── astro.config.mjs            # Astro configuration
├── package.json
└── tsconfig.json
```

## 🚢 Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

**Setup:**
1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch
4. Your site will be available at `https://nspenner.github.io/motiondesignportfolio`

### Manual Build

```bash
npm run build
```

The built site will be in the `dist/` directory.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## 🛠️ Built With

- [Astro](https://astro.build) - Static site generator
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vimeo](https://vimeo.com) - Video hosting and embeds
- [Pages CMS](https://pagescms.org) - Content management

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Support

For questions or support, please [open an issue](https://github.com/nspenner/motiondesignportfolio/issues).

---

Built with ❤️ using Astro 
