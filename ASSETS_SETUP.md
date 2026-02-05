# Assets Setup Guide

## Folder Structure
Your project now includes a local assets folder for images:

```
src/
├── assets/
│   └── images/
│       ├── hero-bg.jpg        (Hero section background)
│       └── featured-doc.jpg    (Featured document thumbnail)
├── components/
├── App.tsx
└── main.tsx
```

## How to Add Images

### Step 1: Prepare Your Images
- **hero-bg.jpg**: 2000×1200px (library, archives, or heritage-themed)
- **featured-doc.jpg**: 300×400px (historical document or manuscript)

**Image format recommendations:**
- JPG/JPEG: For photographs and complex images
- PNG: For images with transparency
- WebP: Modern format with better compression (requires browser support)

### Step 2: Add Images to the Folder
Place your images directly in: `src/assets/images/`

**Windows Explorer:**
1. Navigate to: `c:\Users\Utilisateur1\Desktop\project\src\assets\images\`
2. Copy your images there
3. Make sure filenames match exactly:
   - `hero-bg.jpg`
   - `featured-doc.jpg`

**VS Code:**
1. Right-click on `src/assets/images` folder in Explorer
2. Select "Reveal in File Explorer"
3. Drag and drop your images

### Step 3: Verify Import Paths
The Hero component imports them automatically:

```tsx
import heroBg from '../assets/images/hero-bg.jpg';
import featuredDocImage from '../assets/images/featured-doc.jpg';
```

## Finding Images for Your Heritage Platform

### Stock Photo Sites (Free Tier)
- **Unsplash** (https://unsplash.com)
  - Search: "library", "archives", "manuscripts", "old documents"
  - Download: Full resolution, free to use
  
- **Pexels** (https://www.pexels.com)
  - Search: "historical documents", "library", "heritage"
  - Download: Open source images

- **Pixabay** (https://pixabay.com)
  - Search: "archives", "ancient manuscripts"
  - No attribution required

### Public Domain Sources
- **Library of Congress** (https://www.loc.gov/)
  - Genuine historical images
  - Full collection digitized

- **Wikimedia Commons** (https://commons.wikimedia.org/)
  - Millions of free cultural works
  - Diverse heritage images

- **Internet Archive** (https://archive.org/)
  - Books, documents, historical images

## Image Optimization

### Recommended Dimensions

**Hero Background (hero-bg.jpg):**
- Size: 2000×1200px (landscape 16:9 ratio)
- File size: 200-400KB recommended
- Format: JPG with 75-85% quality

**Featured Document (featured-doc.jpg):**
- Size: 300×400px (portrait, book ratio)
- File size: 50-100KB
- Format: JPG with 80% quality

### Optimize Before Adding

**Using online tools:**
1. **TinyJPG** (https://tinyjpg.com/)
2. **ImageOptim** (https://imageoptim.com/)
3. **Squoosh** (https://squoosh.app/)

**Example compression:**
- Original: 2000×1200px, 1.2MB
- After Squoosh: 2000×1200px, 250KB (80-90% smaller)

## Using Images in Your Project

### Hero Background
Your hero section now uses:
```tsx
style={{ backgroundImage: `url(${heroBg})` }}
```

No additional changes needed. Just add the image file and it will load.

### Featured Document Thumbnail
The featured document card uses:
```tsx
<img src={featuredDocImage} alt="Declaration of Independence" />
```

Vite automatically imports the image as a URL.

## Using Images Elsewhere

### Other Components
To use assets in other components:

```tsx
// Import the image
import myImage from '../assets/images/my-image.jpg';

// Use in JSX
<img src={myImage} alt="Description" />

// Or as background
<div style={{ backgroundImage: `url(${myImage})` }} />
```

### Adding More Assets

Create organized subfolders:

```
src/assets/
├── images/
│   ├── hero/
│   │   └── hero-bg.jpg
│   ├── documents/
│   │   ├── featured-doc.jpg
│   │   └── manuscript.jpg
│   └── icons/
│       └── archive.svg
└── fonts/
    └── playfair-display.woff2
```

## Troubleshooting

### Problem: Image not showing on page
**Solution 1:** Check filename spelling and location
- Hero expects: `src/assets/images/hero-bg.jpg`
- Featured expects: `src/assets/images/featured-doc.jpg`

**Solution 2:** Clear browser cache
- Press `Ctrl+Shift+R` (hard refresh)
- Or clear browser cache manually

**Solution 3:** Check file format
- JPG images: Use `.jpg` or `.jpeg` extension
- PNG images: Use `.png`
- Match the import statement exactly

### Problem: Build fails with image errors
**Solution:** Ensure dev server is running
```bash
npm run dev
```

If using production build:
```bash
npm run build
```

### Problem: Images not optimized
**Solution:** Use an image optimizer before adding

## Best Practices

✅ **Do:**
- Keep image filenames lowercase: `hero-bg.jpg` ✓
- Use meaningful names: `hero-bg.jpg` ✓
- Optimize before adding: 200-400KB max ✓
- Use JPG for photographs ✓
- Version control without huge images ✓

❌ **Don't:**
- Add unoptimized images (1MB+) ✗
- Use spaces in filenames ✗
- Add PSD or RAW files ✗
- Mix uppercase/lowercase in imports ✗

## File Size Impact

Your images will be:
- **Included in dev server** (instant hot reload)
- **Bundled in production build** (Vite optimizes)
- **Cached by browser** (long-term caching enabled)

Estimated bundle size with images:
- Hero bg (250KB) + Featured doc (80KB) = ~330KB
- Gzipped: ~80-100KB (typical production size)

## Next Steps

1. Download 2 images (hero background, featured document)
2. Optimize them (TinyJPG or Squoosh)
3. Save as `hero-bg.jpg` and `featured-doc.jpg`
4. Place in `src/assets/images/`
5. Refresh your browser (hard refresh: Ctrl+Shift+R)
6. Done! Images will display

Your component is already configured to use these images.
