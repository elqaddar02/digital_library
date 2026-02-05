# Internationalization (i18n) Setup

## Overview
Your project now uses **i18next** for internationalization. **French is the default language**, with English as a fallback option.

## Current Structure

```
src/
├── locales/
│   ├── fr.json          (French translations - default)
│   └── en.json          (English translations)
├── i18n.ts              (i18n configuration file)
├── components/
│   ├── Header.tsx       (Language switcher integrated)
│   ├── Hero.tsx         (Uses translations)
│   └── LatestAdditions.tsx (Uses translations)
└── main.tsx             (i18n initialized before app render)
```

## How It Works

### 1. **Initialization** (`src/i18n.ts`)
```typescript
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',              // DEFAULT LANGUAGE: FRENCH
    fallbackLng: 'fr',      // Fallback if translation missing
    interpolation: {
      escapeValue: false,
    },
  });
```

### 2. **Translation Files** (JSON Format)
**French** (`src/locales/fr.json`):
```json
{
  "hero": {
    "title": "Bibliothèque nationale du royaume du maroc  ",
    "subtitle": "Explorez des millions de documents...",
    "searchPlaceholder": "Rechercher des collections...",
    "searchButton": "Rechercher"
  }
}
```

**English** (`src/locales/en.json`):
```json
{
  "hero": {
    "title": "Search the National Knowledge",
    "subtitle": "Explore millions of documents...",
    "searchPlaceholder": "Search collections...",
    "searchButton": "Search"
  }
}
```

### 3. **Using Translations in Components**
```tsx
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <h1>{t('hero.title')}</h1>
    <p>{t('hero.subtitle')}</p>
    <input placeholder={t('hero.searchPlaceholder')} />
  );
}
```

### 4. **Language Switching**
The Header component includes a language switcher:
```tsx
const { t, i18n } = useTranslation();

// Change language
const handleLanguageSelect = (code: string) => {
  i18n.changeLanguage(code);
};

// Get current language
<span>{i18n.language}</span>
```

## Components Using Translations

✅ **Header.tsx**
- Navigation items
- Sign In button
- Language dropdown
- Mobile menu language selector

✅ **Hero.tsx**
- Title & subtitle
- Search placeholder
- Search button
- Featured document label
- View document button

✅ **LatestAdditions.tsx**
- Section title & description
- View All Collections button

## Adding New Translations

### Step 1: Add to Translation Files
**In `src/locales/fr.json`:**
```json
{
  "newSection": {
    "heading": "Mon titre en français",
    "description": "Ma description en français"
  }
}
```

**In `src/locales/en.json`:**
```json
{
  "newSection": {
    "heading": "My heading in English",
    "description": "My description in English"
  }
}
```

### Step 2: Use in Component
```tsx
import { useTranslation } from 'react-i18next';

export default function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('newSection.heading')}</h2>
      <p>{t('newSection.description')}</p>
    </div>
  );
}
```

## Adding New Languages

### Step 1: Create Translation File
Create `src/locales/es.json` for Spanish:
```json
{
  "header": {
    "collections": "Colecciones"
    // ... rest of translations
  }
}
```

### Step 2: Update i18n Configuration
Edit `src/i18n.ts`:
```typescript
import esTranslations from './locales/es.json';

const resources = {
  en: { translation: enTranslations },
  fr: { translation: frTranslations },
  es: { translation: esTranslations },  // Add this
};
```

### Step 3: Update Language Switcher
Edit `src/components/Header.tsx`:
```typescript
const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },  // Add this
];
```

## Translation File Organization

Current structure in JSON files:
```json
{
  "header": { ... },
  "hero": { ... },
  "latestAdditions": { ... },
  "featuredCollections": { ... },
  "exploreCategories": { ... },
  "footer": { ... }
}
```

**Naming Convention:**
- Use lowercase kebab-case for keys
- Group related translations by section
- Use dot notation for nested access: `t('section.key')`

## Best Practices

✅ **Do:**
- Keep translation strings concise
- Maintain consistent nesting structure
- Use meaningful key names
- Test all languages before deployment
- Add comments for context if needed

❌ **Don't:**
- Hardcode text in components (use `t()` instead)
- Mix multiple languages in single files
- Use random key names
- Duplicate translations across keys

## Persistence (Optional Enhancement)

To persist language preference in localStorage:

```tsx
// Update Header.tsx
const handleLanguageSelect = (code: string) => {
  i18n.changeLanguage(code);
  localStorage.setItem('preferredLanguage', code);  // Save preference
};

// In i18n.ts, on initialization
const savedLanguage = localStorage.getItem('preferredLanguage');
i18n.init({
  lng: savedLanguage || 'fr',  // Use saved or default
  // ... rest of config
});
```

## Current Default

- **Language:** French (`fr`)
- **Fallback:** French
- **Available Languages:** English (`en`), French (`fr`)

The application will always start in French. Users can switch to English using the language selector in the Header.

## Dependencies

```json
{
  "i18next": "^23.x",
  "react-i18next": "^13.x"
}
```

Both packages are already installed in `package.json`.

## Debugging

To check current language and namespace:

```tsx
const { t, i18n } = useTranslation();

console.log('Current language:', i18n.language);
console.log('Available languages:', i18n.languages);
console.log('Loaded namespaces:', i18n.loadedNamespaces);
```

## Next Steps

1. ✅ **i18n core initialized** - Ready to use
2. ✅ **French & English translations added** - Default is French
3. **Add to remaining components** - Update FeaturedCollections, ExploreCategories, Footer
4. **Test all languages** - Verify all strings translate correctly
5. **Add more languages** - When needed (Spanish, Arabic, etc.)
6. **Implement localStorage** - To save user language preference

Your project is now properly internationalized and ready to scale!
