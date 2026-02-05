import { Search, Archive, Calendar } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import heroBg from '../assets/images/hero-bg.png';
import featuredDocImage from '../assets/images/LOGO.png';

export default function Hero() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFeaturedDoc] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  // Featured document data
  const featuredDoc = {
    id: '1776-declaration',
    title: 'At-Tasrīf liman ‘Ajaza ‘an at-Ta’līf',
    year: 1776,
    description: 'At-Tasrif liman Ajaz ‘an at-Talif (The Arrangement of Medical Knowledge for One Who is Unable to Compile) is a monumental 30-volume medical encyclopedia compiled in the 11th century by Abu al-Qasim al-Zahrawi (936–1013 CE), known in the West as Abulcasis. As the foremost surgeon of the Islamic Golden Age and court physician to Caliph Al-Hakam II of Córdoba, al-Zahrawi synthesized Greco-Roman medical traditions with innovative Arabic practices. The work is particularly celebrated for its final volume on surgery—the most comprehensive surgical text of its era—which introduced over 200 surgical instruments, many of his own invention, including forceps, scalpels, catgut sutures, and the syringe. His detailed illustrations and procedural descriptions influenced European medicine for nearly five centuries through Latin translations, establishing foundational principles in dentistry, obstetrics, and wound management',
    category: 'Historical Documents',
    image: featuredDocImage
  };

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundAttachment: 'fixed'
        }}
        aria-hidden="true"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/45" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto w-full text-center">
          {/* Title */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 font-bold"
            style={{ lineHeight: '1.4' }}>
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-100 mb-12 leading-relaxed max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* Search bar - Primary action */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-16">
            <div className="relative shadow-2xl">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('hero.searchPlaceholder')}
                className="w-full pl-16 pr-6 py-5 text-base md:text-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-0 transition-all bg-white text-gray-900 placeholder-gray-500"
                aria-label="Search heritage collections"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-white rounded-lg transition-colors font-medium shadow-lg"
              >
                {t('hero.searchButton')}
              </button>
            </div>
          </form>

          {/* Featured document preview - Low visual priority */}
          {showFeaturedDoc && (
            <div className="mt-8 max-w-3xl mx-auto w-full">
              <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-white/20">
                <div className="flex gap-6 pl-6 ">
                  {/* Document info - Left side */}
                  <div className="flex-1 pt-6 pb-6 text-left flex flex-col">
                    <div>
                      <div className="flex items-center gap-1 text-sm text-gold-300 mb-5">
                        <Archive className="w-4 h-4" />
                        <span>{featuredDoc.category}</span>
                      </div>
                      <h3 className="font-serif text-base md:text-lg text-white font-bold mb-2 line-clamp-2">
                        {featuredDoc.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-gray-300 mb-3">
                        <Calendar className="w-3 h-3" />
                        <span>{featuredDoc.year}</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-3 line-clamp-5">
                        {featuredDoc.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="text-xs font-medium text-gold-300 hover:text-gold-200 transition-colors inline-flex items-center gap-1 bg-gold-500/20 px-3 py-2 rounded-lg w-fit mt-auto"
                      aria-label={`View ${featuredDoc.title}`}
                    >
                      {t('latestAdditions.viewDocument')}
                      <span>→</span>
                    </button>
                  </div>

                  {/* Document image - Right side, larger */}
                  <img
                    src={featuredDoc.image}
                    alt={featuredDoc.title}
                    className="w-1/2 h-48 max-w-xs h-auto  flex-shrink-0 object-cover rounded border border-white/20"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-3">{t('hero.featuredLabel')}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
