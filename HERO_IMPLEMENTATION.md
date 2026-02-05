# Hero Section - Implementation Guide & Customization

## Quick Start

### Current State
The hero section is fully functional and displays:
- ✅ Heritage background with parallax effect
- ✅ Dark overlay ensuring text readability
- ✅ Large serif title: "Search the National Knowledge"
- ✅ Explanatory subtitle
- ✅ Prominent central search bar (primary action)
- ✅ Featured document preview card (optional)

**View in browser:** http://localhost:5174

### File Location
```
src/components/Hero.tsx
```

## Integration Examples

### 1. Connect Search to Your Backend

**Current (Console only):**
```tsx
const handleSearch = (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Searching for:', searchQuery);
};
```

**Option A: Supabase Full-Text Search**
```tsx
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const handleSearch = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!searchQuery.trim()) return;

  try {
    const { data, error } = await supabase
      .from('documents')
      .select('id, title, category')
      .textSearch('fulltext_column', searchQuery);

    if (error) throw error;
    
    // Redirect to results page with query param
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`, { state: { results: data } });
  } catch (error) {
    console.error('Search failed:', error);
  }
};
```

**Option B: Simple Redirect**
```tsx
const handleSearch = (e: React.FormEvent) => {
  e.preventDefault();
  if (!searchQuery.trim()) return;
  
  navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  window.scrollTo(0, 0);
};
```

### 2. Make Featured Document Dynamic

**Current (Static):**
```tsx
const featuredDoc = {
  id: '1776-declaration',
  title: 'Declaration of Independence',
  year: 1776,
  description: 'Founding document of the United States',
  category: 'Historical Documents',
  image: 'https://images.unsplash.com/...'
};
```

**Option A: Fetch on Mount**
```tsx
import { useEffect } from 'react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFeaturedDoc, setShowFeaturedDoc] = useState(true);
  const [featuredDoc, setFeaturedDoc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedDoc = async () => {
      try {
        const { data } = await supabase
          .from('documents')
          .select('*')
          .eq('featured', true)
          .single();
        
        setFeaturedDoc(data);
      } catch (error) {
        console.error('Failed to fetch featured doc:', error);
        setShowFeaturedDoc(false);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedDoc();
  }, []);

  // Return null while loading, or component as usual
}
```

**Option B: Random Selection from Collection**
```tsx
const getRandomFeaturedDoc = async () => {
  const { count } = await supabase
    .from('documents')
    .select('*', { count: 'exact', head: true })
    .eq('featured', true);

  const randomOffset = Math.floor(Math.random() * (count || 1));

  const { data } = await supabase
    .from('documents')
    .select('*')
    .eq('featured', true)
    .range(randomOffset, randomOffset);

  return data?.[0];
};
```

### 3. Add Search Suggestions (Autocomplete)

**Create a `SearchSuggestions.tsx` component:**
```tsx
import { useEffect, useState } from 'react';

interface SearchSuggestionsProps {
  query: string;
  onSelect: (suggestion: string) => void;
}

export function SearchSuggestions({ query, onSelect }: SearchSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setShow(false);
      return;
    }

    const fetchSuggestions = async () => {
      const { data } = await supabase
        .from('search_suggestions')
        .select('term')
        .like('term', `${query}%`)
        .limit(5);

      setSuggestions(data?.map(d => d.term) || []);
      setShow(true);
    };

    const timer = setTimeout(fetchSuggestions, 300); // Debounce
    return () => clearTimeout(timer);
  }, [query]);

  if (!show || suggestions.length === 0) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      {suggestions.map((suggestion) => (
        <button
          key={suggestion}
          onClick={() => onSelect(suggestion)}
          className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors text-gray-900 text-sm"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}
```

**Integrate in Hero:**
```tsx
import { SearchSuggestions } from './SearchSuggestions';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSuggestionSelect = (suggestion: string) => {
    setSearchQuery(suggestion);
    // Optionally trigger search immediately
    handleSearch({ preventDefault: () => {} } as React.FormEvent);
  };

  return (
    // ... existing code ...
    <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-16">
      <div className="relative shadow-2xl">
        {/* ... input and button ... */}
      </div>
      <SearchSuggestions query={searchQuery} onSelect={handleSuggestionSelect} />
    </form>
  );
}
```

### 4. Add Analytics Tracking

**Track search submissions:**
```tsx
import { useEffect } from 'react';

const handleSearch = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!searchQuery.trim()) return;

  // Track event
  try {
    await supabase
      .from('search_analytics')
      .insert({
        query: searchQuery,
        timestamp: new Date().toISOString(),
        user_id: user?.id,
        session_id: sessionStorage.getItem('session_id')
      });
  } catch (error) {
    console.error('Analytics tracking failed:', error);
  }

  // Perform search
  navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
};
```

**Track featured document interactions:**
```tsx
const handleViewDocument = async (docId: string) => {
  await supabase
    .from('featured_doc_clicks')
    .insert({
      document_id: docId,
      timestamp: new Date().toISOString(),
      user_id: user?.id
    });

  navigate(`/document/${docId}`);
};

// Update featured doc link
<button
  type="button"
  onClick={() => handleViewDocument(featuredDoc.id)}
  className="mt-3 text-xs font-medium text-gold-400 hover:text-gold-300 transition-colors inline-flex items-center gap-1"
>
  View document
  <span>→</span>
</button>
```

## Customization Patterns

### Change Hero Title & Subtitle

```tsx
// In Hero.tsx

// Option 1: Props-based (more flexible)
interface HeroProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  ctaText?: string;
}

export default function Hero({
  title = "Search the National Knowledge",
  subtitle = "Explore millions of historical documents...",
  placeholder = "Search collections, documents, manuscripts, topics...",
  ctaText = "Search"
}: HeroProps) {
  // Use props in JSX
}

// Option 2: Constants
const HERO_CONTENT = {
  title: "Search the National Knowledge",
  subtitle: "Explore millions of historical documents...",
  // ...
};
```

### Adjust Color Scheme

```tsx
// Current palette uses gold/heritage colors
// To switch to different colors, modify these classes:

// Change button color
bg-gold-500 hover:bg-gold-600
→ bg-blue-500 hover:bg-blue-600

// Change highlight color in featured doc
text-gold-300
text-gold-400 hover:text-gold-300
→ text-green-300, etc.

// Change overlay darkness
from-black/55 via-black/50 to-black/45
→ from-black/65 via-black/60 to-black/50 (darker)
→ from-black/45 via-black/40 to-black/35 (lighter)
```

### Change Background Image

```tsx
// In Hero.tsx, replace the URL:

backgroundImage: 'url(https://images.unsplash.com/photo-1507842955343-583cf2230d77?w=2000&h=1200&fit=crop)'
```

**Best sources for heritage images:**
- Unsplash: Search "library", "archives", "manuscripts"
- Pexels: Similar searches
- Your own assets: Place in `public/images/` folder

**Using local images:**
```tsx
import heroImage from '../assets/hero-background.jpg';

backgroundImage: `url(${heroImage})`
```

### Adjust Min Heights

```tsx
// Current: 600px → 700px → 800px
// More compact: 500px → 600px → 700px
min-h-[500px] md:min-h-[600px] lg:min-h-[700px]

// Taller: 700px → 800px → 900px  
min-h-[700px] md:min-h-[800px] lg:min-h-[900px]
```

### Disable Featured Document

```tsx
// Option 1: Conditional rendering
const [showFeaturedDoc] = useState(false); // Set to false

// Option 2: Comment out the entire section
{/* Featured document preview - Low visual priority */}
{/* ... card code commented out ... */}

// The search bar will move down slightly without it
```

### Add Scroll Animation

```tsx
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="...">
      {/* ... background ... */}
      <div className={`relative z-10 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {/* Content */}
      </div>
    </section>
  );
}
```

## Common Issues & Solutions

### Issue: Background image not loading
**Solution:** Check image URL is accessible and CORS-enabled
```tsx
// Test with CORS proxy if needed
backgroundImage: 'url(https://images.unsplash.com/...)'
// Add ?w=2000&h=1200&fit=crop for optimization
```

### Issue: Text hard to read
**Solution:** Increase overlay opacity
```tsx
// Current
from-black/55 via-black/50 to-black/45

// Darker
from-black/70 via-black/65 to-black/60
```

### Issue: Search button text cut off on mobile
**Solution:** Adjust button padding or use width constraint
```tsx
// Option 1: Reduce padding
px-6 py-2.5 → px-4 py-2

// Option 2: Make button full width on mobile
sm:w-auto → auto
```

### Issue: Featured doc card too large
**Solution:** Reduce max-width
```tsx
// Current
max-w-sm → max-w-xs (smaller)
```

## Testing Checklist

- [ ] Search form submits on Enter key
- [ ] Button click triggers search handler
- [ ] Background image loads (check Network tab)
- [ ] Text readable on all viewing angles (WCAG AA contrast)
- [ ] Responsive design works (test at 375px, 768px, 1440px)
- [ ] Focus states visible for keyboard navigation
- [ ] Featured doc link is clickable

## Performance Tips

1. **Optimize background image:**
   - Use appropriately sized images (2000×1200px max)
   - Use WebP format if browser support available
   - Lazy load background (advanced)

2. **Minimize repaints:**
   - Avoid animating expensive properties (width, height)
   - Use `transform` and `opacity` for animations
   - Use `will-change` sparingly on hover states

3. **Monitor bundle size:**
   - lucide-react icons included: ~12KB
   - No additional dependencies added
   - Keep component lean

## Future Enhancements

1. **Skeleton loading** for featured document while fetching
2. **Loading state** during search submission
3. **Error boundary** for graceful failure handling
4. **A/B testing** different hero copy
5. **Personalization** based on user history
6. **Seasonal variants** with different backgrounds
7. **Multi-language support** with i18n
8. **PWA offline support** for search suggestions
