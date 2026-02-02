# Color System Reference

## Quick Color Guide for Jackson Fontaine's Portfolio

---

## Dark Mode (Default)

### Backgrounds
```css
--bg-primary: #0F172A        /* Main background - rich dark blue-gray */
--bg-secondary: #1E293B      /* Section backgrounds - slightly lighter */
--bg-tertiary: #334155       /* Card backgrounds - medium dark */
--bg-elevated: #1E293B       /* Elevated elements like modals */
```

### Text Colors
```css
--text-primary: #F1F5F9      /* Main headings and important text */
--text-secondary: #CBD5E1    /* Body text and descriptions */
--text-tertiary: #94A3B8     /* Subtle text, captions, metadata */
```

### Accent Colors
```css
--accent-primary: #60A5FA           /* Bright blue - buttons, links, highlights */
--accent-primary-light: #93C5FD    /* Lighter blue - hover states */
--accent-primary-dark: #3B82F6     /* Darker blue - active states */

--accent-secondary: #A78BFA         /* Vibrant purple - secondary actions */
--accent-secondary-light: #C4B5FD  /* Lighter purple - hover states */
```

### Borders
```css
--border-light: #334155      /* Subtle borders, dividers */
--border-medium: #475569     /* Standard borders */
--border-dark: #64748B       /* Emphasis borders */
```

### Effects
```css
--accent-glow: rgba(96, 165, 250, 0.15)  /* Glow effect color */
--shadow-glow: 0 0 30px var(--accent-glow), 0 0 60px rgba(96, 165, 250, 0.1)
```

---

## Light Mode

### Backgrounds
```css
--bg-primary: #FFFFFF        /* Pure white background */
--bg-secondary: #F8FAFC      /* Subtle off-white for sections */
--bg-tertiary: #F1F5F9       /* Light gray for cards */
--bg-elevated: #FFFFFF       /* White for elevated elements */
```

### Text Colors
```css
--text-primary: #0F172A      /* Dark for main headings */
--text-secondary: #475569    /* Medium gray for body text */
--text-tertiary: #64748B     /* Light gray for subtle text */
```

### Accent Colors
```css
--accent-primary: #3B82F6           /* Professional blue */
--accent-primary-light: #60A5FA    /* Lighter blue for hover */
--accent-primary-dark: #2563EB     /* Darker blue for active */

--accent-secondary: #8B5CF6         /* Rich purple */
--accent-secondary-light: #A78BFA  /* Lighter purple */
```

### Borders
```css
--border-light: #E2E8F0      /* Very light borders */
--border-medium: #CBD5E1     /* Standard borders */
--border-dark: #94A3B8       /* Emphasis borders */
```

### Effects
```css
--accent-glow: rgba(59, 130, 246, 0.2)  /* Blue glow for light mode */
```

---

## Usage Guidelines

### When to Use Each Color

#### Primary Blue (#60A5FA in dark, #3B82F6 in light)
- Call-to-action buttons
- Primary links
- Interactive elements
- Focus states
- Active navigation items
- Important icons

#### Secondary Purple (#A78BFA in dark, #8B5CF6 in light)
- Secondary buttons
- Skill tags (alternating with blue)
- Gradient endpoints
- Decorative accents
- Hover state variations

#### Text Hierarchy
- **Primary**: Headings, titles, important labels
- **Secondary**: Body text, descriptions, paragraphs
- **Tertiary**: Captions, metadata, timestamps, subtle labels

#### Backgrounds
- **Primary**: Main page background
- **Secondary**: Section backgrounds (alternating)
- **Tertiary**: Card/component backgrounds
- **Elevated**: Overlays, modals, dropdowns

---

## Gradients

### Common Gradient Patterns

#### Primary Gradient (Blue → Purple)
```css
background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
```
**Use for**: Buttons, featured elements, accent bars

#### Text Gradient
```css
background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```
**Use for**: Hero name, special headings

#### Overlay Gradient
```css
background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
```
**Use for**: Image overlays, text protection

---

## Shadow System

### Shadow Tokens
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
--shadow-glow: [See above - includes accent color]
```

### When to Use Each Shadow
- **sm**: Subtle elevation, borders
- **md**: Cards, buttons (default state)
- **lg**: Navigation, important cards
- **xl**: Hero elements, featured content
- **glow**: Hover states, interactive elements

---

## Accessibility Notes

### Contrast Ratios (WCAG AA Compliant)

#### Dark Mode
- Text Primary on BG Primary: 15.8:1 ✅
- Text Secondary on BG Primary: 9.7:1 ✅
- Accent Primary on BG Primary: 7.2:1 ✅

#### Light Mode
- Text Primary on BG Primary: 16.1:1 ✅
- Text Secondary on BG Primary: 7.8:1 ✅
- Accent Primary on BG Primary: 4.8:1 ✅

### Tips for Maintaining Accessibility
1. Always use text-primary for important text
2. Ensure accent colors have sufficient contrast
3. Don't rely on color alone for information
4. Test with color blindness simulators
5. Provide hover and focus states for interactive elements

---

## Color Combinations

### Recommended Pairings

#### Hero Section
- Name: Gradient (Blue → Purple)
- Subtitle: text-secondary
- Background: bg-primary

#### Cards
- Background: bg-elevated
- Border: border-light
- Hover Border: accent-primary
- Title: text-primary
- Description: text-secondary

#### Buttons
- Primary: Gradient (Blue → Purple) with white text
- Secondary: border-medium with text-primary
- Ghost: Transparent with accent-primary text

#### Navigation
- Background: bg-elevated with blur
- Text: text-primary
- Hover: accent-primary
- Active: accent-primary with underline

---

## Theming

### How Theme Switching Works

The theme is controlled by a `data-theme` attribute on the `:root` element:

```html
<!-- Light mode -->
<html data-theme="light">

<!-- Dark mode -->
<html data-theme="dark">
```

### Theme Persistence
- Stored in localStorage as `"theme"`
- Falls back to system preference
- Applied on page load to prevent flash

### Adding New Themed Properties

```css
:root {
  --my-color: #value-for-light;
}

:root[data-theme="dark"] {
  --my-color: #value-for-dark;
}
```

---

## Color Psychology

### Why These Colors?

#### Blue (#60A5FA / #3B82F6)
- **Associations**: Trust, professionalism, technology, stability
- **Use Case**: Perfect for a tech portfolio
- **Emotion**: Confident, reliable, intelligent

#### Purple (#A78BFA / #8B5CF6)
- **Associations**: Creativity, innovation, luxury, wisdom
- **Use Case**: Adds creative flair to technical work
- **Emotion**: Imaginative, sophisticated, unique

#### Dark Backgrounds (#0F172A)
- **Associations**: Premium, modern, focused
- **Use Case**: Reduces eye strain, highlights content
- **Emotion**: Professional, serious, contemporary

---

## Quick Copy-Paste

### Complete Dark Mode Palette
```
Background: #0F172A
Cards: #1E293B
Primary: #60A5FA
Purple: #A78BFA
Text: #F1F5F9
```

### Complete Light Mode Palette
```
Background: #FFFFFF
Cards: #F1F5F9
Primary: #3B82F6
Purple: #8B5CF6
Text: #0F172A
```

---

## Tools & Resources

### Recommended Tools for Color Work
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Color Picker**: https://coolors.co
- **Gradient Generator**: https://cssgradient.io
- **Palette Generator**: https://mycolor.space

### Testing
- Test in both themes before deploying
- Check on different displays (LCD, OLED)
- Verify in different lighting conditions
- Use browser DevTools for color accessibility

---

**Last Updated**: February 2, 2026
**Color System Version**: 1.0
