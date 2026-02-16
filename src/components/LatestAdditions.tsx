import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface CardItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
}

export default function LatestAdditions() {
  const { t } = useTranslation();
  const [items] = useState<CardItem[]>([
    {
      id: '1',
      title: t('latestAdditions.items.1.title'),
      description: t('latestAdditions.items.1.description'),
      category: t('latestAdditions.items.1.category'),
      image: '/src/assets/images/latestAdditions/Carte.jpeg',
      date: t('latestAdditions.dateFormat.twoDaysAgo')
    },
    {
      id: '2',
      title: t('latestAdditions.items.2.title'),
      description: t('latestAdditions.items.2.description'),
      category: t('latestAdditions.items.2.category'),
      image: '/src/assets/images/latestAdditions/Estampe.jpeg',
      date: t('latestAdditions.dateFormat.fiveDaysAgo')
    },
    {
      id: '3',
      title: t('latestAdditions.items.3.title'),
      description: t('latestAdditions.items.3.description'),
      category: t('latestAdditions.items.3.category'),
      image: '/src/assets/images/latestAdditions/Journal.jpeg',
      date: t('latestAdditions.dateFormat.oneWeekAgo')
    },
    {
      id: '4',
      title: t('latestAdditions.items.4.title'),
      description: t('latestAdditions.items.4.description'),
      category: t('latestAdditions.items.4.category'),
      image: '/src/assets/images/latestAdditions/Livre.jpeg',
      date: t('latestAdditions.dateFormat.oneWeekAgo')
    },
    {
      id: '5',
      title: t('latestAdditions.items.5.title'),
      description: t('latestAdditions.items.5.description'),
      category: t('latestAdditions.items.5.category'),
      image: '/src/assets/images/latestAdditions/Manuscrit.jpeg',
      date: t('latestAdditions.dateFormat.oneWeekAgo')
    },
    {
      id: '6',
      title: t('latestAdditions.items.6.title'),
      description: t('latestAdditions.items.6.description'),
      category: t('latestAdditions.items.6.category'),
      image: '/src/assets/images/latestAdditions/Revue.jpeg',
      date: t('latestAdditions.dateFormat.oneWeekAgo')
    },

  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerPage = 4;
  const totalSlides = Math.ceil(items.length / itemsPerPage);

  // Auto-slide effect
//   useEffect(() => {
//     const autoSlideTimer = setInterval(() => {
//       setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
//     }, 10000); // Auto-slide every 5 seconds

//     return () => clearInterval(autoSlideTimer);
//   }, [totalSlides]);

  const handlePrevious = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleDotClick = (index: number) => {
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const visibleItems = items.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-parchment-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-4xl text-heritage-900 mb-3">
            {t('latestAdditions.title')}
          </h2>
          <p className="text-heritage-700 text-base md:text-lg max-w-2xl">
            {t('latestAdditions.description')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards grid - Slider */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ease-in-out ${
              isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {visibleItems.map((item) => (
              <article
                key={item.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col h-full"
              >
                {/* Image container */}
                <div className="relative overflow-hidden bg-heritage-100 aspect-video">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-gold-500/90 text-white text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content container */}
                <div className="p-4 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="font-serif text-base md:text-lg text-heritage-900 font-semibold mb-2 line-clamp-2 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-heritage-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                    {item.description}
                  </p>

                  {/* Date and CTA container */}
                  <div className="flex items-center justify-between pt-2 border-t border-heritage-100">
                    <span className="text-xs text-heritage-500">
                      {item.date}
                    </span>
                    <button
                      className="text-gold-600 hover:text-gold-700 transition-colors p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={`View ${item.title}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute -left-16 top-1/2 -translate-y-1/2 p-2 rounded-full bg-heritage-100 hover:bg-heritage-200 text-heritage-900 transition-colors z-10 hidden lg:flex items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-16 top-1/2 -translate-y-1/2 p-2 rounded-full bg-heritage-100 hover:bg-heritage-200 text-heritage-900 transition-colors z-10 hidden lg:flex items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gold-500 w-8'
                  : 'bg-heritage-300 hover:bg-heritage-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
