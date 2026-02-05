import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Archive, Users, Globe, BookOpen } from 'lucide-react';

interface Stat {
  id: string;
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

export default function Statistics() {
  const { t } = useTranslation();
  const [displayValues, setDisplayValues] = useState<{ [key: string]: number }>({
    documents: 0,
    collections: 0,
    users: 0,
    countries: 0,
  });

  const stats: Stat[] = [
    {
      id: 'documents',
      icon: <Archive className="w-6 h-6" strokeWidth={1.5} />,
      value: 2500000,
      label: t('statistics.documents') || 'Digital Items',
      suffix: '+',
    },
    {
      id: 'collections',
      icon: <BookOpen className="w-6 h-6" strokeWidth={1.5} />,
      value: 450,
      label: t('statistics.collections') || 'Collections',
      suffix: '+',
    },
    {
      id: 'users',
      icon: <Users className="w-6 h-6" strokeWidth={1.5} />,
      value: 180000,
      label: t('statistics.users') || 'Active Users',
      suffix: '+',
    },
    {
      id: 'countries',
      icon: <Globe className="w-6 h-6" strokeWidth={1.5} />,
      value: 142,
      label: t('statistics.countries') || 'Countries',
      suffix: '',
    },
  ];

  // Animated count-up effect
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const newValues: { [key: string]: number } = {};
      stats.forEach((stat) => {
        newValues[stat.id] = Math.floor(stat.value * progress);
      });

      setDisplayValues(newValues);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    animateCount();
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <section className="py-16 md:py-20 bg-parchment-50 border-y border-heritage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section intro - optional, can be removed for minimalism */}
        <div className="mb-12 text-center">
          <p className="text-heritage-600 text-sm uppercase tracking-widest font-medium mb-2">
            {t('statistics.byTheNumbers') || 'Our Scale'}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-heritage-900">
            {t('statistics.title') || 'Trusted Institutional Authority'}
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-white/50 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="mb-4 text-heritage-600">
                {stat.icon}
              </div>

              {/* Number with count-up animation */}
              <div className="mb-2">
                <div className="font-serif text-4xl md:text-5xl text-heritage-900 font-bold leading-none">
                  {formatNumber(displayValues[stat.id])}
                  <span className="text-gold-600 text-3xl md:text-4xl ml-1">
                    {stat.suffix}
                  </span>
                </div>
              </div>

              {/* Label */}
              <p className="text-heritage-700 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Optional divider line */}
        <div className="mt-12 pt-8 border-t border-heritage-200">
          <p className="text-center text-heritage-600 text-xs md:text-sm max-w-2xl mx-auto">
            {t('statistics.trust') || 'Representing the diverse heritage and knowledge of our nation, curated and preserved for future generations.'}
          </p>
        </div>
      </div>
    </section>
  );
}
