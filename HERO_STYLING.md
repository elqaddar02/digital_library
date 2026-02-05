# Hero Section - CSS & Styling Reference

## Full Component Structure

```
<section>                          /* Full-width container, relative positioning */
├── Background Image Layer         /* Absolute, behind content */
│   └── Fixed background image with parallax
├── Dark Overlay Layer             /* Gradient overlay for contrast */
│   └── from-black/55 via-black/50 to-black/45
└── Content Layer (relative z-10)  /* Main content above overlay */
    ├── Main Title (h1)
    ├── Subtitle (p)
    ├── Search Form
    │   └── Input + Integrated Button
    └── Featured Document Card (Conditional)
        ├── Document Thumbnail
        └── Metadata Section
```

## CSS Classes Reference

### Section Container
```css
.section-hero {
  @apply relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden;
}
```
- `relative`: For z-index layering
- `w-full`: 100% viewport width
- `min-h-[600px]`: Dynamic height based on viewport
- `overflow-hidden`: Clips oversized background

### Background Layer
```css
.bg-layer {
  @apply absolute inset-0 bg-cover bg-center bg-no-repeat;
  background-attachment: fixed;  /* Parallax effect */
}
```

### Dark Overlay Layer
```css
.overlay {
  @apply absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/45;
}
```

**Opacity Levels:**
- Top (from): `black/55` (55% opacity) - Darkest at title
- Middle (via): `black/50` (50% opacity) - Smooth transition
- Bottom (to): `black/45` (45% opacity) - Slightly lighter at bottom

**Rationale:** Gradient allows top to be darker (better readability) while bottom has more image visibility (less claustrophobic)

### Content Wrapper
```css
.content-wrapper {
  @apply relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-32;
}
```
- `relative z-10`: Layers above background and overlay
- `flex flex-col items-center justify-center`: Centers all content
- `px-4 sm:px-6 lg:px-8`: Responsive horizontal padding
- `py-20 md:py-32`: Vertical centering with responsive padding

### Main Title
```css
.h1-hero {
  @apply font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight font-bold;
}
```

**Responsive Sizing:**
| Breakpoint | Font Size | Equivalent px |
|-----------|-----------|---------------|
| Mobile (default) | 5xl | 48px |
| Tablet (md) | 6xl | 60px |
| Desktop (lg) | 7xl | 72px |

**Typography:**
- `font-serif`: Playfair Display (authoritative, heritage aesthetic)
- `font-bold`: Weight 700 for maximum impact
- `leading-tight`: Line-height 1.25 (aggressive for serif)
- `text-white`: Pure white for maximum contrast
- `mb-4`: 1rem margin below for spacing

### Subtitle
```css
.p-subtitle {
  @apply text-lg md:text-xl text-gray-100 mb-12 leading-relaxed max-w-2xl mx-auto;
}
```

**Features:**
- `text-lg md:text-xl`: Scales with viewport
- `text-gray-100`: Slightly off-white for secondary priority
- `leading-relaxed`: Line-height 1.625 for readability
- `max-w-2xl`: Constrains width to ~42 characters per line (optimal)
- `mx-auto`: Horizontal centering
- `mb-12`: 3rem margin for separation from title

### Search Form Container
```css
.form-search {
  @apply max-w-3xl mx-auto mb-16;
}

.input-wrapper {
  @apply relative shadow-2xl;
}
```

### Search Input
```css
.input-search {
  @apply w-full pl-16 pr-6 py-5 text-base md:text-lg rounded-xl
         focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-0 
         transition-all bg-white text-gray-900 placeholder-gray-500;
}
```

**Key Features:**
- `pl-16`: 4rem left padding for icon
- `pr-6`: Right padding for button
- `py-5`: 1.25rem vertical padding (touch-friendly)
- `rounded-xl`: 12px border radius (modern, not too round)
- `text-base md:text-lg`: Responsive text size
- `focus:ring-2 focus:ring-gold-500`: Gold ring outline on focus (WCAG indicator)
- `focus:ring-offset-0`: No offset (compact focus state)
- `transition-all`: Smooth animation on focus
- `shadow-2xl`: Elevated appearance with shadow

**Color States:**
- Default: White background, gray text
- Focus: White background + gold ring
- Placeholder: Gray-500 text

### Search Icon
```css
.icon-search {
  @apply absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400;
}
```
- `absolute left-5 top-1/2 -translate-y-1/2`: Perfectly centered vertically
- `w-6 h-6`: 24×24px icon size
- `text-gray-400`: Subtle gray color

### Search Button
```css
.btn-search {
  @apply absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 
         bg-gold-500 hover:bg-gold-600 
         text-white rounded-lg transition-colors font-medium shadow-lg;
}
```

**Features:**
- `absolute right-2 top-1/2 -translate-y-1/2`: Vertically centered within input
- `px-6 py-2.5`: Horizontal and vertical padding
- `bg-gold-500`: Primary accent color
- `hover:bg-gold-600`: Darker on hover for feedback
- `text-white`: High contrast text
- `rounded-lg`: 8px border radius (slightly less than input)
- `transition-colors`: Smooth color animation
- `font-medium`: Font weight 500
- `shadow-lg`: Additional shadow for depth

**Interaction States:**
| State | Background | Cursor |
|-------|-----------|--------|
| Default | Gold-500 (#e5bc4a) | pointer |
| Hover | Gold-600 (#c08323) | pointer |
| Active | Gold-600 | pointer |
| Focus | Gold-600 (via keyboard) | auto |

### Featured Document Card
```css
.featured-container {
  @apply mt-8 max-w-sm mx-auto;
}

.featured-card {
  @apply bg-white/10 backdrop-blur-md rounded-lg overflow-hidden 
         shadow-xl hover:shadow-2xl transition-shadow border border-white/20;
}

.featured-card-content {
  @apply flex gap-4 p-4;
}
```

**Glassmorphism Effect:**
- `bg-white/10`: 10% white overlay (semi-transparent)
- `backdrop-blur-md`: Medium blur (~12px) of content behind
- `border border-white/20`: 20% white border for definition
- Combined: Modern frosted glass aesthetic

### Featured Document Thumbnail
```css
.featured-image {
  @apply w-20 h-28 object-cover rounded border border-white/20;
}
```
- `w-20 h-28`: 80px × 112px (standard book aspect ratio)
- `object-cover`: Fills space while maintaining aspect ratio
- `rounded`: Border radius for visual softness
- `border border-white/20`: Subtle white border

### Featured Document Metadata
```css
.featured-meta {
  @apply flex-1 text-left;
}

.featured-category {
  @apply flex items-center gap-1 text-xs text-gold-300 mb-1;
}

.featured-title {
  @apply font-serif text-sm md:text-base text-white font-semibold mb-1 line-clamp-2;
}

.featured-date {
  @apply flex items-center gap-2 text-xs text-gray-300;
}

.featured-description {
  @apply text-xs text-gray-300 mt-2 line-clamp-1;
}

.featured-link {
  @apply mt-3 text-xs font-medium text-gold-400 hover:text-gold-300 
         transition-colors inline-flex items-center gap-1;
}
```

**Hierarchy in Featured Card:**
1. **Category Badge**: `text-gold-300` (accent color, smallest text)
2. **Title**: `text-sm md:text-base text-white` (important info)
3. **Date**: `text-xs text-gray-300` (supporting info)
4. **Description**: `text-xs text-gray-300` (additional context)
5. **Link**: `text-gold-400` hover `text-gold-300` (interaction cue)

**Text Truncation:**
- `line-clamp-2` on title: Shows up to 2 lines
- `line-clamp-1` on description: Single line with ellipsis

### Featured Card Label
```css
.featured-label {
  @apply text-xs text-gray-300 mt-3;
}
```

## Responsive Design Breakdown

### Mobile (< 640px)
- Title: 48px (5xl)
- Subtitle: 18px (lg)
- Input height: py-5 (20px height)
- Section padding: px-4
- Content vertical spacing: py-20
- Featured card: max-w-sm (24rem) with single column

### Tablet (640px - 1024px)
- Title: 60px (6xl)
- Subtitle: 20px (xl)
- Input height: py-5 (same)
- Section padding: px-6
- Content vertical spacing: py-32 (increased)
- Featured card: Same responsive layout

### Desktop (> 1024px)
- Title: 72px (7xl)
- Subtitle: 20px (xl)
- Input height: py-5 (same)
- Section padding: px-8
- Content vertical spacing: py-32
- Featured card: Maintains max-w-sm constraint

## Z-Index Layering

```
z-10 (Content)  ← Text, form, featured card
z-0  (Overlay)  ← Dark gradient
z-0  (Background) ← Image
```

## Animation & Transitions

### Search Input Focus
```css
transition-all duration-200 ease-out
```
- All properties animated: `transition-all`
- Duration: 200ms (snappy)
- Timing: `ease-out` (natural feel)
- Affected: border ring, shadow

### Button Hover
```css
transition-colors duration-200 ease-out
```
- Only color animates: `transition-colors`
- Smooth color shift from gold-500 → gold-600

### Featured Card Hover
```css
transition-shadow duration-300 ease-out
```
- Shadow enhancement on hover
- Slightly longer duration (300ms) for subtlety

## Performance Optimization

### CSS Properties Used
- `transform`: `translate-y` for icon/button positioning (GPU accelerated)
- No expensive shadows on animation (only on hover end state)
- `backdrop-blur-md`: Potential performance cost on low-end devices
  - Graceful fallback: Still renders without blur, readable with solid bg

### Recommended Additions for Production

```css
/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  /* Optionally adjust overlay opacity */
}
```

## Browser Support

✅ **All modern browsers**
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

⚠️ **Backdrop Blur** - Falls back to solid color on IE11 (not supported)

## Customization Variables

To adjust the hero without modifying Tailwind classes:

```tsx
// Min heights (in Hero.tsx)
min-h-[600px] md:min-h-[700px] lg:min-h-[800px]

// Overlay opacity
from-black/55 via-black/50 to-black/45

// Background image
backgroundImage: 'url(YOUR_IMAGE)'

// Gold accent color (from config)
bg-gold-500 hover:bg-gold-600

// Featured card visibility
const [showFeaturedDoc] = useState(true/false)
```
