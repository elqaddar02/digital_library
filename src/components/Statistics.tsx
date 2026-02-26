import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Archive, Users, Globe, BookOpen } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface Stat {
  id: string;
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  color: string;
  bgColor: string;
}

export default function Statistics() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
    },
    {
      id: 'collections',
      icon: <BookOpen className="w-6 h-6" strokeWidth={1.5} />,
      value: 450,
      label: t('statistics.collections') || 'Collections',
      suffix: '+',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
    },
    {
      id: 'users',
      icon: <Users className="w-6 h-6" strokeWidth={1.5} />,
      value: 180000,
      label: t('statistics.users') || 'Active Users',
      suffix: '+',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'countries',
      icon: <Globe className="w-6 h-6" strokeWidth={1.5} />,
      value: 142,
      label: t('statistics.countries') || 'Countries',
      suffix: '',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
    },
  ];

  // Intersection Observer to detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animated count-up effect - only runs when section is visible
  useEffect(() => {
    if (!isVisible) return;

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
  }, [isVisible]);

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
    <section ref={sectionRef} className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gold-200 to-amber-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-heritage-200 to-gold-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          label={t('statistics.byTheNumbers') || 'By The Numbers'}
          title={t('statistics.title') || 'Trusted Institutional Authority'}
          centered={true}
          variant="gradient"
          accentColor="gold"
        />

        {/* Stats grid - Card style matching ExploreCategories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? `${index * 0.1}s` : '0s',
              }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Decorative pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-full -z-10"></div>
              
              <div className="relative p-6">
                {/* Header with icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`text-gray-700 group-hover:text-${stat.color.split('-')[1]}-600 transition-colors`}>
                      {stat.icon}
                    </div>
                  </div>
                  
                  {/* Decorative sparkle */}
                  <div className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="text-left">
                  {/* Number with count-up animation */}
                  <div className="mb-2">
                    <div className="font-serif text-4xl md:text-5xl text-gray-900 font-bold leading-none">
                      {formatNumber(displayValues[stat.id])}
                      <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent text-3xl md:text-4xl ml-1`}>
                        {stat.suffix}
                      </span>
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-gray-600 text-sm md:text-base font-medium mb-3">
                    {stat.label}
                  </p>

                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000`}
                      style={{ width: isVisible ? `${(displayValues[stat.id] / stat.value) * 100}%` : '0%' }}
                    ></div>
                  </div>
                </div>

                {/* Bottom decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust message with modern styling */}
        <div className="mt-12 pt-8">
          <div className="relative">
            {/* Decorative quote marks */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-100 to-amber-100 rounded-full flex items-center justify-center">
                <span className="text-2xl text-gold-600 font-serif">"</span>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-center text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                {t('statistics.trust') || 'Representing the diverse heritage and knowledge of our nation, curated and preserved for future generations.'}
              </p>
              
              {/* Signature line */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
                <span className="text-xs text-gray-400 font-serif italic">National Heritage Archive</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}