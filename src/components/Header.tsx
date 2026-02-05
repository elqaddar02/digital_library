import { Menu, X, Globe, LogIn } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import navLogo from '../assets/images/NAV-LOGO.png';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const navItems = [
    { label: t('header.about'), href: '#about', key: 'about' },
    { label: t('header.collections'), href: '#collections', key: 'collections' },
    { label: t('header.themes'), href: '#themes', key: 'themes' },
    { label: t('header.exhibitions'), href: '#exhibitions', key: 'exhibitions' },
    { label: t('header.resources'), href: '#resources', key: 'resources' },
    
  ];

  const [activeNav, setActiveNav] = useState('collections');

  const handleNavClick = (item: string) => {
    setActiveNav(item.toLowerCase());
    setMobileMenuOpen(false);
  };

  const handleLanguageSelect = (code: string) => {
    i18n.changeLanguage(code);
    setLanguageOpen(false);
  };

  return (
    <header className="bg-white border-b border-heritage-200 sticky top-0 z-50">
      <div className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo and Institution Name */}
          <a href="#home" className="flex items-center space-x-3 flex-shrink-0">
            <img
              src={navLogo}
              alt="National Digital Library Logo"
              className="h-20 w-auto"
            />
            {/* <div>
              <h1 className="font-serif text-xl text-heritage-900 font-semibold leading-tight">
                National Digital Library
              </h1>
              <p className="text-xs text-heritage-600 font-light tracking-wide">
                Ministry of Culture & Heritage
              </p>
            </div> */}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center mx-12">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => handleNavClick(item.key)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative group ${
                  activeNav === item.key.toLowerCase()
                    ? 'text-heritage-900'
                    : 'text-heritage-700 hover:text-heritage-900'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gold-500 transition-all duration-300 ${
                    activeNav === item.key.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Language Switcher */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-heritage-700 hover:text-heritage-900 transition-colors rounded hover:bg-heritage-50"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4" strokeWidth={1.5} />
                <span className="uppercase font-semibold">{i18n.language}</span>
              </button>

              {languageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-heritage-200 rounded-lg shadow-lg overflow-hidden z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        i18n.language === lang.code
                          ? 'bg-gold-50 text-heritage-900 font-medium'
                          : 'text-heritage-700 hover:bg-heritage-50'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sign In Button */}
            <button className="hidden sm:flex items-center space-x-2 px-4 py-2 text-sm font-medium text-heritage-900 border border-heritage-300 rounded-lg hover:bg-heritage-50 transition-colors">
              <LogIn className="w-4 h-4" strokeWidth={1.5} />
              <span>{t('header.signIn')}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-heritage-800 hover:text-heritage-900 rounded hover:bg-heritage-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-heritage-200">
          <nav className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => handleNavClick(item.key)}
                className={`block px-4 py-3 rounded transition-colors ${
                  activeNav === item.key.toLowerCase()
                    ? 'bg-gold-50 text-heritage-900 font-medium'
                    : 'text-heritage-700 hover:bg-heritage-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="px-4 py-4 border-t border-heritage-200 space-y-3">
            {/* Mobile Language Selector */}
            <div className="sm:hidden">
              <label className="text-xs font-semibold text-heritage-600 uppercase tracking-wide block mb-2">
                {t('header.language')}
              </label>
              <select
                value={i18n.language}
                onChange={(e) => handleLanguageSelect(e.target.value)}
                className="w-full px-3 py-2 border border-heritage-200 rounded text-sm bg-white text-heritage-900"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Sign In Button */}
            <button className="sm:hidden w-full flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium text-white bg-heritage-700 rounded-lg hover:bg-heritage-800 transition-colors">
              <LogIn className="w-4 h-4" strokeWidth={1.5} />
              <span>{t('header.signIn')}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
