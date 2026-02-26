import { Globe, Landmark, Users, BookMarked, Map, Scroll } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle';

const categories = [
  {
    id: 1,
    title: 'History & Politics',
    icon: Landmark,
    count: '8,429',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    description: 'Journey through time'
  },
  {
    id: 2,
    title: 'Geography & Maps',
    icon: Map,
    count: '3,847',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    description: 'Explore the world'
  },
  {
    id: 3,
    title: 'Arts & Literature',
    icon: BookMarked,
    count: '12,567',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    description: 'Creative expressions'
  },
  {
    id: 4,
    title: 'Social & Cultural',
    icon: Users,
    count: '6,234',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50',
    description: 'Traditions & customs'
  },
  {
    id: 5,
    title: 'Languages',
    icon: Globe,
    count: '4,892',
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-50',
    description: 'Global communication'
  },
  {
    id: 6,
    title: 'Ancient Texts',
    icon: Scroll,
    count: '2,156',
    color: 'from-amber-600 to-brown-500',
    bgColor: 'bg-amber-50',
    description: 'Timeless wisdom'
  },
];

export default function ExploreCategories() {
  const { t } = useTranslation();
  return (
    <section id="explore" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('exploreCategories.title')}
          description={t('exploreCategories.description')}
          centered={true}
          variant="gradient"
          accentColor="gold"
        />

        {/* Categories Grid - Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Decorative pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-full -z-10"></div>
                
                <div className="relative p-6">
                  {/* Header with icon and count */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${category.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 text-gray-700 group-hover:text-${category.color.split('-')[1]}-600 transition-colors`} strokeWidth={1.5} />
                    </div>
                    <span className="text-3xl font-bold text-gray-300 group-hover:text-gray-400 transition-colors">
                      {category.count}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="text-left">
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {category.description}
                    </p>
                    
                    {/* Progress bar or stats */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Available items</span>
                      <span className={`font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.count} total
                      </span>
                    </div>
                    <div className="w-full h-1 bg-gray-100 rounded-full mt-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-500 group-hover:w-full`}
                        style={{ width: `${Math.random() * 70 + 30}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Explore link */}
                  <div className="mt-4 flex items-center text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors">
                    <span>Explore category</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom section with stats and CTA */}
        <div className="mt-16 relative">
          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Items', value: '38,125', icon: BookMarked },
              { label: 'Categories', value: '6', icon: Map },
              { label: 'Contributors', value: '1,234', icon: Users },
              { label: 'Languages', value: '24', icon: Globe },
            ].map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gold-50 rounded-lg">
                      <StatIcon className="w-5 h-5 text-gold-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          {/* <div className="text-center">
            <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-amber-500 text-white rounded-full font-medium hover:from-gold-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <span>{t('exploreCategories.viewAllButton')}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
             
              <div className="absolute -top-1 -right-1 w-3 h-3">
                <span className="absolute inset-0 animate-ping bg-white/30 rounded-full"></span>
              </div>
            </button>
          </div>  */}
        </div>
      </div>
    </section>
  );
}