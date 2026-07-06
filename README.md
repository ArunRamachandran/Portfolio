# Arun Ramachandran — Portfolio

A modern, responsive portfolio website showcasing full-stack development expertise with a focus on frontend design and implementation.

**Live Site:** [https://arunkr.com](https://arunkr.com)

---

## 📋 Project Overview

This repository contains two versions of the portfolio:

- **V1**: Original vanilla JavaScript implementation with webpack
- **V2**: Modern React 18 + TypeScript redesign with Vite (current production version)

Both versions are maintained as separate builds and deployments. The V2 redesign focuses on improved UX, modern tooling, and enhanced visual design.

---

## 🎨 Version History

### V1 (Legacy)

**Location:** `/` (root directory with webpack build)

**Tech Stack:**
- Vanilla JavaScript (ES6+)
- Webpack for bundling
- Babel for transpilation
- Custom CSS for styling
- Responsive design

**Features:**
- Original portfolio layout
- Experience timeline
- Tech stack showcase
- Contact section
- Google Analytics integration

**Status:** ✅ Maintained but not actively developed

---

### V2 (Current Production)

**Location:** `/v2` directory

**Tech Stack:**
- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.0 (ultra-fast build tool)
- React Icons for tech stack logos
- Custom CSS with CSS variables
- Mobile-first responsive design

**Key Features:**
- **Complete Redesign:** Modern, elegant UI with smooth animations
- **Interactive Elements:**
  - Animated greeting that cycles through multiple languages (Hey, Hello, Hola, Bonjour, Ciao, Hallo, Namaste, こんにちは, Olá, Привет)
  - Floating pill animations for tech stack
  - Scroll-reveal animations for sections
  - Smooth scrolling navigation
  - Get in touch button for easy contact section access

- **Tech Stack Display:** 21 technologies with brand-accurate icons and colors
  - JavaScript, TypeScript, React, Node.js, Redux, GraphQL
  - Design System, Git, GitHub, Figma, Storybook, VSCode
  - Webpack, Jest, Cypress, Docker, Jenkins, AWS, Azure, Nginx, Accessibility

- **Responsive Design:** 
  - Desktop optimized layout
  - Tablet friendly
  - Mobile first approach

- **Performance:**
  - Built with Vite for optimal performance
  - CSS-in-JS with CSS variables for theming
  - Lazy loading assets
  - Optimized images

- **Accessibility:**
  - Semantic HTML
  - ARIA labels
  - Keyboard navigation support
  - Focus management

**Status:** ✅ Production ready and actively maintained

---

## 🏠 Directory Structure

```
Portfolio/
├── v2/                          # Modern React + TypeScript version
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── App.tsx
│   │   │   ├── Hero.tsx         # Landing section with greeting & photo
│   │   │   ├── TechStack.tsx    # 21-item tech showcase
│   │   │   ├── Experience.tsx   # Work experience section
│   │   │   ├── Contact.tsx      # Contact section
│   │   │   ├── StackIcon.tsx    # Tech logo renderer
│   │   │   ├── SectionLabel.tsx
│   │   │   ├── LocationBadge.tsx
│   │   │   └── ConnectorArrow.tsx
│   │   ├── data/
│   │   │   ├── stack.ts         # 21 technologies data
│   │   │   └── experience.ts    # Work experience data
│   │   ├── hooks/
│   │   │   └── useReveal.ts     # Scroll reveal animation hook
│   │   ├── styles/
│   │   │   └── index.css        # Global styles & animations
│   │   ├── assets/
│   │   │   └── arun.jpg         # Profile photo
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── package.json             # Dependencies & scripts
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── build/                   # Production build output
├── build/                        # V1 webpack build output (public on gh-pages)
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions automation
├── CNAME                        # Custom domain (arunkr.com)
├── index.html                   # V1 entry point
├── webpack.config.js            # V1 webpack config
├── webpack.prod.js              # V1 production config
├── webpack.dev.js               # V1 development config
└── README.md                    # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (includes npm)
- **Git** for version control
- **GitHub CLI** (optional, for deployment verification)

### Installation

```bash
# Clone the repository
git clone https://github.com/ArunRamachandran/Portfolio.git
cd Portfolio

# For V2 development
cd v2
npm install
```

---

## 🛠 Development Workflow

### V2 Development (Recommended)

**Start development server:**
```bash
cd v2
npm run dev
```
- Runs on `http://localhost:5173`
- Hot Module Replacement (HMR) for instant updates
- TypeScript checking enabled

**Preview production build:**
```bash
cd v2
npm run preview
```
- Runs on `http://localhost:4173`
- Tests the optimized production build locally

**Type checking:**
```bash
cd v2
npm run build  # Also performs TypeScript type checking
```

---

## 🏗 Build & Deployment

### Local Build (V2)

```bash
cd v2
npm run build
```

**Output:**
- `../build/` directory with optimized assets
- Includes HTML, CSS, JavaScript, and image files
- Ready for production

### Automatic Deployment (Recommended)

**GitHub Actions handles everything automatically:**

1. **Trigger:** Push to master branch or merge PR to master
2. **Process:**
   ```
   Push to master
   ↓
   GitHub Actions workflow starts
   ↓
   Installs dependencies
   ↓
   Builds V2 project
   ↓
   Deploys to gh-pages branch
   ↓
   GitHub Pages serves updated site
   ```

3. **Monitor:** Go to [Actions tab](https://github.com/ArunRamachandran/Portfolio/actions)

### Manual Deployment (If Needed)

```bash
cd v2
npm run deploy
```

**What it does:**
- Builds the V2 project
- Pushes build artifacts to `gh-pages` branch
- Updates live site within 2-3 minutes

---

## 🌐 Custom Domain & HTTPS Setup

### Domain Configuration

**Domain:** `arunkr.com`  
**Provider:** Namecheap  
**Protocol:** HTTPS (automatic via GitHub Pages)

### DNS Records

**A Records (pointing to GitHub Pages):**
```
Type: A
Name: @
Values:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
```

**CNAME Record (for www subdomain):**
```
Type: CNAME
Name: www
Value: parkingpage.namecheap.com
```

### GitHub Pages Configuration

1. Go to: Repository → Settings → Pages
2. Source: Deploy from a branch (`gh-pages`)
3. Custom domain: `arunkr.com`
4. Enforce HTTPS: ✅ Enabled

**Result:**
- Visitors see `https://arunkr.com`
- URL stays on custom domain (no redirect to GitHub URL)
- Automatic SSL/TLS certificate via Let's Encrypt

---

## 📝 Git Workflow

### Development Branches

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes, commit regularly
git add .
git commit -m "Meaningful commit message"

# Push to GitHub
git push origin feature/your-feature

# Open Pull Request on GitHub
```

### Merging to Production

1. Create Pull Request to `master`
2. GitHub Actions runs automated deployment check
3. Review changes
4. Merge PR
5. **Automatic deployment** to gh-pages and arunkr.com

### Branch Strategy

- **master:** Production ready, always deployable
- **portfolio-v2:** Development branch for v2 features
- **feature/\*:** Individual feature branches

---

## 📊 Project Stats

### V2 Build Metrics

- **Bundle Size:** ~183 KB (JavaScript)
- **CSS Size:** ~13.67 KB
- **Image Size:** ~521 KB (profile photo)
- **Total Gzip:** ~66 KB (scripts + styles)
- **Build Time:** ~1.5 seconds
- **Modules:** 52 components/modules

### Technologies

**Frontend:**
- React 18 with TypeScript
- Vite for rapid development
- React Icons (5,700+ icons)

**Styling:**
- CSS custom properties (variables)
- CSS Grid & Flexbox
- Responsive media queries
- CSS animations & transitions

**Build & Deploy:**
- GitHub Actions for CI/CD
- GitHub Pages for hosting
- gh-pages npm package for automated deployment

---

## 🎯 Key Features in V2

### Interactive Greeting
- Cycles through 10 different greetings
- Smooth fade-in animation
- Changes every 1.8 seconds
- Waving emoji animation

### Tech Stack Display
- **21 technologies** with brand-accurate icons
- Floating pill animations
- Staggered animation delays for visual interest
- Responsive 3-column grid → 1-column mobile
- Hover effects for interactivity

### Scroll Reveal Animations
- Sections fade in as user scrolls
- Smooth opacity and transform transitions
- Uses IntersectionObserver API
- Performance optimized

### Navigation
- Smooth scroll behavior
- "Get in touch" button links to contact section
- Mobile-friendly navigation

### Responsive Design
- Desktop: Full 3-column layouts
- Tablet: Adjusted spacing and sizing
- Mobile: Single column, optimized touch targets

---

## 🔧 Maintenance

### Updating Technologies

**To add/update tech stack:**
1. Edit `v2/src/data/stack.ts`
2. Add icon imports if needed in `v2/src/components/StackIcon.tsx`
3. Add corresponding hex color for branding
4. Commit and push to trigger automatic deployment

**Example:**
```typescript
// v2/src/data/stack.ts
export const stack: StackItem[] = [
  { name: 'React' },
  { name: 'TypeScript' },
  // ... add more
];
```

### Updating Experience

**To add work experience:**
1. Edit `v2/src/data/experience.ts`
2. Add new experience object with company, role, dates, description
3. Commit and push

### Content Updates

Most content can be updated in:
- `v2/src/components/Hero.tsx` - Landing section
- `v2/src/components/Contact.tsx` - Contact info
- `v2/src/data/experience.ts` - Work history
- `v2/src/data/stack.ts` - Technologies

---

## 🐛 Troubleshooting

### Build Fails with TypeScript Errors
```bash
cd v2
npm run build  # Shows all errors
# Fix errors, then rebuild
```

### Changes Not Showing on arunkr.com
1. Verify GitHub Actions workflow passed ✅
2. Check: [Actions tab](https://github.com/ArunRamachandran/Portfolio/actions)
3. Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
4. Wait 2-3 minutes for GitHub Pages to update

### Development Server Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Try again
npm run dev
```

### Port Already in Use
```bash
# V2 dev uses 5173, preview uses 4173
# If ports are taken, kill the process:
lsof -i :5173  # Find process
kill -9 <PID>  # Kill it
npm run dev    # Try again
```

---

## 📚 Documentation

### Component Documentation

Each component in `v2/src/components/` is self-documented with:
- Type definitions (TypeScript)
- JSX structure showing HTML hierarchy
- CSS class naming conventions

### Styling System

**Color System** (`v2/src/styles/index.css`):
```css
--bg: #ffffff           /* Background */
--paper: #fbfaf8        /* Secondary background */
--ink: #1c1a17          /* Primary text */
--accent: #b4502b       /* Accent color (rust) */
```

**Typography**:
```css
--font-display: 'Inter'                    /* Headers */
--font-body: 'Plus Jakarta Sans'           /* Body text */
--font-eyebrow: 'Instrument Serif'         /* Decorative */
```

---

## 🤝 Contributing

### Making Changes

1. **Create feature branch:**
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Make changes** in V2 (preferred):
   ```bash
   cd v2
   npm run dev  # Test locally
   ```

3. **Commit changes:**
   ```bash
   git add .
   git commit -m "feat: clear description of what changed"
   ```

4. **Push and create PR:**
   ```bash
   git push origin feature/your-feature
   ```

5. **Automatic deployment** when merged to master

### Code Style

- Use TypeScript for type safety
- Use semantic HTML
- Use CSS classes (avoid inline styles)
- Use CSS custom properties for values
- Comment complex logic

---

## 📄 License

This portfolio is personal work. Feel free to use it as inspiration for your own portfolio, but please don't copy the content, images, or exact design.

---

## 📞 Contact

**Email:** arun.ramachandran6@wipro.com  
**Location:** Berlin, Germany  
**Website:** [https://arunkr.com](https://arunkr.com)

**Social:**
- GitHub: [@ArunRamachandran](https://github.com/ArunRamachandran)
- LinkedIn: [arun-ramachandran](https://linkedin.com/in/arun-ramachandran)

---

## 🎉 Recent Updates

### V2 Redesign
- ✅ Complete React 18 + TypeScript rewrite
- ✅ Modern Vite build tool
- ✅ 21 tech stack items with brand logos
- ✅ Floating pill animations
- ✅ Interactive greeting component
- ✅ Scroll reveal animations
- ✅ Mobile responsive design
- ✅ HTTPS on custom domain (arunkr.com)
- ✅ Automatic GitHub Actions deployment

### Infrastructure
- ✅ Custom domain with HTTPS
- ✅ Automated CI/CD pipeline
- ✅ gh-pages deployment
- ✅ GitHub Actions workflow

---

**Last Updated:** July 6, 2026  
**Current Version:** 2.0  
**Node Version:** 18+