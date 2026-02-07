# AI Coding Agent Instructions

## Project Overview
This is a professional portfolio website for Abhishek Singh, a VP of Engineering in FinOps and Machine Learning Expert. It's a modern, fully responsive single-page website hosted on GitHub Pages using Jekyll. The site showcases professional experience, technical skills, and provides contact information.

**Tech Stack:**
- **HTML5** - Semantic structure
- **CSS3** - Component-based styling with CSS custom properties and animations
- **JavaScript (Vanilla + jQuery)** - Navigation, smooth scrolling, intersection observer animations
- **Bootstrap 5** - Grid system and utilities (vendored)
- **Font Awesome 5** - Icons (vendored)
- **Google Fonts** - Inter (body) and Playfair Display (headings)
- **Hosting:** GitHub Pages with Jekyll

## Architecture & File Organization

### CSS Component Architecture
CSS follows a **component-scoped pattern** with one CSS file per major section:
- `assets/css/variables.css` — Design tokens (colors, typography, spacing, shadows, transitions, breakpoints)
- `assets/css/navbar.css` — Navigation bar with mobile hamburger menu
- `assets/css/header.css` — Hero section with floating animation and scroll indicator
- `assets/css/about.css` — About section with stats and profile image
- `assets/css/experience.css` — Timeline-based experience cards
- `assets/css/work_with.css` — Skills grid with category cards and badges
- `assets/css/contact.css` — Contact cards grid and CTA section
- `assets/css/footer.css` — Footer with social links

**Pattern:** All colors, spacing, fonts, and transitions are stored in `variables.css` as CSS custom properties. Components use `var(--primary)`, `var(--spacing-lg)`, etc. Never hardcode hex colors or pixel values.

### HTML Structure
Single-page application with full-page sections anchored by IDs:
- `#home` — Hero header with profile image and CTA buttons
- `#about` — About section with bio and stats
- `#experience` — Work experience with timeline visualization
- `#skills` — Technical skills organized in category cards
- `#contact` — Contact cards and CTA section

### JavaScript Architecture
- **Vanilla JavaScript** — Handles active link highlighting on scroll, mobile menu toggle, and intersection observer for fade-in animations
- **jQuery** — Used for vendor Bootstrap integration (bootstrap.min.js, bootstrap.affix.js)
- Located in: `assets/js/navbar.js` (main navigation logic)

## Design System & Conventions

### Color Palette
All defined in `variables.css`:
- **Primary Blue:** `--primary: #0071b7` (main brand color)
- **Primary Light:** `--primary-light: #e8f4ff` (backgrounds)
- **Secondary:** `--secondary: #1f2937` (text)
- **Accent Green:** `--accent: #10b981` (gradients, hover states)
- **Neutral:** `--light: #f9fafb`, `--gray: #9ca3af`, `--dark: #111827`

### Typography
- **Headings:** Playfair Display (serif, 700 weight) — elegant, professional
- **Body:** Inter (sans-serif, 300-700 weights) — modern, readable
- **Classes:** Use semantic HTML (`<h1>`, `<h2>`, etc.); CSS handles font family

### Spacing System
Token-based (`--spacing-xs` through `--spacing-3xl`):
- `--spacing-md: 1rem` — default padding/margins
- `--spacing-lg: 1.5rem` — section spacing
- `--spacing-3xl: 4rem` — large section gaps

### Component Patterns
1. **Cards** — Border, rounded corners, shadow, hover elevation
   ```html
   <div class="experience-card">
     <h3 class="experience-title">...</h3>
     <div class="experience-tags">
       <span class="tag">Label</span>
     </div>
   </div>
   ```

2. **Badges/Tags** — Inline labels with category colors
   ```html
   <span class="badge badge-primary">Python</span>
   <span class="tag">Leadership</span>
   ```

3. **Buttons** — Always use `.btn` with modifier (`.btn-primary`, `.btn-outline-primary`, `.btn-lg`)

4. **Animations:**
   - `fadeInUp` (0.6s) — Default entrance
   - `float` (3s infinite) — Hero image
   - `scroll-down` (2s infinite) — Scroll indicator
   - Apply via `fade-in` class for scroll-triggered animations

### Responsive Breakpoints
All in `variables.css`:
- `--breakpoint-md: 768px` — tablet/desktop split
- `--breakpoint-lg: 992px` — larger desktop
- Use `@media (max-width: 991px)` or `min-width` patterns

**Mobile-first approach:** Design for mobile, enhance with media queries.

## Key Features & Implementation

### Hero Section
- Full-screen hero with gradient background (`header.css`)
- Floating animation on profile image (continuous `float` animation)
- Smooth scroll-down indicator at bottom
- Scroll-to-section buttons (smooth behavior via vanilla JS)

### Navigation
- **Sticky/Fixed Navbar** — `navbar-fixed` class
- **Hamburger Menu** — Custom CSS hamburger (animates on toggle)
- **Active Link Highlighting** — JavaScript detects scroll position, marks active nav link
- Mobile menu closes on link click or outside click

### Timeline Experience Section
- Vertical timeline with alternating left/right cards
- Gradient line through center
- On mobile (< 991px), all cards align left of line
- Hover effects: border color change, shadow elevation, card lift

### Skills Grid
- Responsive auto-fit grid (min 280px per card)
- 4 categories: Backend, Data/ML, Frontend, Tools
- Badge-based tech list with color coding
- Intersection observer triggers staggered fade-in animations

### Contact Section
- 3-column grid of contact cards (email, LinkedIn, GitHub)
- Cards lift on hover with gradient shine effect
- Full-width CTA section with gradient background below

### Smooth Scrolling
Implemented via:
1. Vanilla JavaScript `scroll-behavior: smooth` (HTML)
2. Manual scroll anchor handling in navbar.js
3. jQuery Bootstrap affix for sticky navbar positioning

## Critical Workflows

### Adding a New Section
1. Add `<section class="section section-name" id="section-id">` to HTML
2. Create `assets/css/section-name.css` with component styles
3. Link CSS in `<head>` after Bootstrap, in load order
4. Use design tokens from `variables.css` for all styling
5. Apply fade-in animation via `.fade-in` class on children

### Updating Colors/Typography
1. Modify `variables.css` custom properties
2. Components automatically update (they reference `var(--primary)`, etc.)
3. **Never hardcode colors** — use variables consistently

### Mobile Responsive Patterns
- Use `@media (max-width: 991px)` for layout shifts
- Test on actual mobile device or browser dev tools
- Common pattern: `grid-template-columns: 1fr` on mobile, `repeat(N, 1fr)` on desktop

### Deployment
1. Commit changes to `master` branch
2. GitHub Actions automatically builds Jekyll site
3. Site deploys to `https://abhiintheweb.github.io`
4. Resume PDF at root (`/AbhiResume.pdf`) must be included

## Asset Paths
All paths are **relative from root**:
- Images: `./assets/images/`
- CSS: `./assets/css/`
- JavaScript: `./assets/js/`
- Vendor: `./vendor/`
- Resume: `./AbhiResume.pdf`

## Performance & Best Practices

### CSS
- Use flexbox/grid for layouts (avoid floats)
- Leverage CSS custom properties for theming
- Apply transitions only to necessary properties (avoid `all`)
- Use `transform` for animations (GPU-accelerated)

### JavaScript
- Vanilla JS preferred over jQuery for modern browsers
- Use event delegation for dynamic elements
- Implement intersection observer for scroll-triggered animations (more performant than scroll events)
- Lazy-load images if adding many new images

### Accessibility
- Use semantic HTML (`<section>`, `<h1>`, `<nav>`)
- Maintain color contrast (primary blue on white passes WCAG AA)
- Ensure buttons and links have descriptive text
- Alt text on images: `alt="Abhishek Singh"`

## File Dependencies
```
index.html
├── vendor/bootstrap/css/bootstrap.min.css
├── vendor/font-awesome/css/*.min.css
├── assets/css/variables.css (must load first)
├── assets/css/navbar.css
├── assets/css/header.css
├── assets/css/about.css
├── assets/css/experience.css
├── assets/css/work_with.css
├── assets/css/contact.css
├── assets/css/footer.css
└── assets/js/navbar.js
```

**Load order matters:** Variables → Global → Components. Never reorder.

## Common Tasks

| Task | How |
|------|-----|
| Change brand color | Update `--primary` in `variables.css` |
| Add new skill | Add `<li><span class="badge badge-primary">Skill</span></li>` in skills section |
| Update resume link | Change `href="./AbhiResume.pdf"` in buttons |
| Add work experience | Duplicate `.timeline-item` block in experience section |
| Change fonts | Update `--font-heading` and `--font-body` in `variables.css` |
| Adjust spacing | Modify `--spacing-*` tokens in `variables.css` |
