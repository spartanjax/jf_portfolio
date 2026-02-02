# Quick Start Guide

## Getting Started with Your Redesigned Portfolio

---

## Running the Portfolio

### Development Mode
```bash
npm run dev
```
This starts the Vite development server at http://localhost:5173

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder

### Preview Production Build
```bash
npm run preview
```
Previews the production build locally

---

## What Changed?

### Visual Changes
✨ **Modern Dark Theme**: Sophisticated dark blue-gray background with vibrant blue/purple accents
✨ **Light Mode Available**: Toggle between dark and light themes
✨ **Glassmorphism**: Frosted glass effects on navigation
✨ **Smooth Animations**: Professional micro-interactions throughout
✨ **Modern Typography**: Space Grotesk for headings, Inter for body text
✨ **Gradient Accents**: Eye-catching gradients on buttons and featured elements
✨ **Glow Effects**: Subtle glows on interactive elements

### What Stayed the Same
✅ All your content (text, projects, experience, contact info)
✅ All navigation functionality
✅ Smooth scrolling behavior
✅ Responsive design
✅ Social media links
✅ Resume link
✅ Project structure and organization

---

## Theme Toggle

The theme toggle button is located in the top-left corner. It:
- Saves your preference to localStorage
- Persists across page refreshes
- Falls back to system preference on first visit
- Smoothly transitions all colors

**Default**: Light mode
**To change default**: Modify the `useState` initial value in `ThemeToggle.jsx`

---

## Customization Guide

### Changing Colors

All colors are defined in `/src/index.mod.scss` as CSS variables.

#### To change the primary accent color:
```scss
:root {
  --accent-primary: #3B82F6;  // Change this hex value
}

:root[data-theme="dark"] {
  --accent-primary: #60A5FA;  // And this one for dark mode
}
```

#### To change the background:
```scss
:root[data-theme="dark"] {
  --bg-primary: #0F172A;  // Change to your preferred dark color
}
```

### Changing Fonts

In `/src/index.mod.scss`, update the Google Fonts import:
```scss
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

Then update the font families:
```scss
* {
    font-family: "YourFont", sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: "YourHeadingFont", sans-serif;
}
```

### Adjusting Animation Speed

In component SCSS files, modify `transition` durations:
```scss
transition: all 0.3s ease;  // Change 0.3s to your preferred duration
```

For the gradient background animation, edit in `/src/index.mod.scss`:
```scss
animation: gradientShift 15s ease infinite;  // Change 15s
```

---

## Key Files Reference

### Styling
- `/src/index.mod.scss` - Global styles, colors, animations
- `/src/assets/_mixins.scss` - Responsive breakpoint utilities
- `/src/Components/[Component]/[Component].mod.scss` - Component styles

### Components
- `/src/App.jsx` - Main app structure
- `/src/Components/1_Navbar/Navbar.jsx` - Navigation
- `/src/Components/2_Hero/Hero.jsx` - Hero section
- `/src/Components/About Me/about.jsx` - About section
- `/src/Components/Experience/experience.jsx` - Timeline
- `/src/Components/Projects/projects.jsx` - Projects grid
- `/src/Components/ThemeToggle/ThemeToggle.jsx` - Theme switcher

### Data
- `/src/assets/projects.js` - Project data
- `/src/assets/timeline_experience.js` - Experience entries
- `/src/assets/featured_proj.js` - Featured project

---

## Making Content Changes

### Update Your Bio
Edit `/src/Components/About Me/about.jsx`:
```jsx
<p><b>Hey there!</b> Your new bio text here...</p>
```

### Add/Edit Projects
Edit `/src/assets/projects.js`:
```javascript
export default [
  {
    key: 'unique-key',
    title: 'Project Name',
    blurb: 'Short description',
    skills: ['React', 'Node.js'],
    project_link: 'https://...',
    project_cover: '/images/cover.png'
  },
  // ... more projects
]
```

### Add/Edit Experience
Edit `/src/assets/timeline_experience.js`:
```javascript
{
  id: 1,
  title: "Your Position",
  company: "Company Name",
  company_link: "https://...",
  location: "City, Country",
  description: "What you did...",
  date: "Jan 2024 - Present",
  icon: "work"
}
```

### Update Contact Info
Edit `/src/Components/Contact/contact.jsx`:
```jsx
<p>Your contact message with <b>your@email.com</b></p>
```

### Update Social Links
Edit `/src/Components/Overlay/overlay.jsx`:
```jsx
<a href="https://your-linkedin-url" target="_blank" rel="noreferrer">
```

---

## Responsive Breakpoints

The design uses these breakpoints (defined in `/src/assets/_mixins.scss`):

- **Mobile**: < 600px
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

### Testing Responsive Design
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
3. Test at different viewport sizes
4. Check both portrait and landscape orientations

---

## Browser Support

### Fully Supported
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Features with Graceful Degradation
- Backdrop filters (glassmorphism)
- CSS Grid
- CSS Custom Properties

### Not Supported
- Internet Explorer (consider a polyfill or fallback message)

---

## Performance Tips

### Images
- Use WebP format when possible
- Compress images before uploading
- Recommended max size: 1920x1080 for hero images
- Use appropriate aspect ratios

### Fonts
- Current setup loads only used font weights
- Consider self-hosting fonts for better performance

### Build Optimization
The Vite build automatically:
- Minifies CSS and JavaScript
- Optimizes images
- Splits code for better caching
- Tree-shakes unused code

---

## Deployment

### Deploy to Netlify (Recommended)
1. Push your code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Deploy to Vercel
1. Push to GitHub
2. Import project in Vercel
3. Framework preset: Vite
4. Deploy!

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Update vite.config.js with base path
4. Run `npm run deploy`

---

## Troubleshooting

### Theme not persisting
- Check browser localStorage is enabled
- Clear cache and hard reload (Ctrl+Shift+R)

### Styles not updating
- Clear browser cache
- Restart dev server
- Check for SCSS syntax errors in console

### Build fails
- Run `npm install` to ensure dependencies are current
- Check for console errors
- Verify all imports are correct

### Images not loading
- Check file paths are correct
- Ensure images are in the `public/` folder
- Verify file extensions match actual files

### Animations not smooth
- Check browser hardware acceleration is enabled
- Reduce animation complexity if needed
- Test on different devices

---

## Accessibility Checklist

- ✅ Keyboard navigation works
- ✅ Color contrast meets WCAG AA standards
- ✅ Focus states are visible
- ✅ Alt text on images
- ✅ Semantic HTML structure
- ✅ ARIA labels where needed

### Test Accessibility
- Use browser DevTools Lighthouse
- Test with keyboard only (no mouse)
- Use a screen reader
- Check color contrast

---

## SEO Recommendations

### Update Meta Tags
In `/index.html`:
```html
<head>
  <title>Jackson Fontaine | Computer Science Portfolio</title>
  <meta name="description" content="Portfolio of Jackson Fontaine, CS/Math student at University of Auckland">
  <meta property="og:title" content="Jackson Fontaine - Portfolio">
  <meta property="og:description" content="...">
  <meta property="og:image" content="/og-image.jpg">
</head>
```

### Add Sitemap
Create `public/sitemap.xml`

### Add robots.txt
Create `public/robots.txt`

---

## Next Steps

### Immediate Tasks
1. ✅ Review the redesign in your browser
2. ✅ Test theme toggle functionality
3. ✅ Check all sections on mobile
4. ✅ Update any outdated content
5. ✅ Test all links

### Future Enhancements
- [ ] Add project filtering/categories
- [ ] Implement blog section
- [ ] Add testimonials/recommendations
- [ ] Create case studies for major projects
- [ ] Add downloadable resume
- [ ] Implement contact form
- [ ] Add analytics (Google Analytics/Plausible)

---

## Support & Documentation

### Key Documentation
- `REDESIGN_SUMMARY.md` - Complete overview of changes
- `COLOR_REFERENCE.md` - Color system guide
- `README.md` - Project overview

### Learning Resources
- **Vite**: https://vitejs.dev
- **React**: https://react.dev
- **SCSS**: https://sass-lang.com
- **CSS Variables**: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

---

## Questions?

If you need to make changes and aren't sure how:
1. Check the relevant component's `.jsx` and `.mod.scss` files
2. Refer to the `REDESIGN_SUMMARY.md` for architectural decisions
3. Use browser DevTools to inspect elements
4. The color system is documented in `COLOR_REFERENCE.md`

---

**Your portfolio is ready to impress!** 🚀

The build is optimized, the design is modern, and all your content is preserved. Just run `npm run dev` to see it in action!
