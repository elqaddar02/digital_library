import { Globe, Landmark, Users, BookMarked, Map, Scroll } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const categories = [
  {
    id: 1,
    title: 'History & Politics',
    icon: Landmark,
    count: '8,429',
  },
  {
    id: 2,
    title: 'Geography & Maps',
    icon: Map,
    count: '3,847',
  },
  {
    id: 3,
    title: 'Arts & Literature',
    icon: BookMarked,
    count: '12,567',
  },
  {
    id: 4,
    title: 'Social & Cultural',
    icon: Users,
    count: '6,234',
  },
  {
    id: 5,
    title: 'Languages',
    icon: Globe,
    count: '4,892',
  },
  {
    id: 6,
    title: 'Ancient Texts',
    icon: Scroll,
    count: '2,156',
  },
];

export default function ExploreCategories() {
  const { t } = useTranslation();
  return (
    <section id="explore" className="py-16 md:py-20 bg-parchment-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-heritage-900 mb-4">
            {t('exploreCategories.title')}
          </h2>
          <p className="text-lg text-heritage-700 max-w-2xl mx-auto">
            {t('exploreCategories.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className="group bg-white border border-heritage-200 rounded-lg p-6 hover:border-gold-400 hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-heritage-100 flex items-center justify-center group-hover:bg-gold-50 transition-colors">
                    <Icon className="w-6 h-6 text-heritage-700 group-hover:text-gold-600 transition-colors" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-medium text-heritage-900 mb-1 text-sm group-hover:text-gold-700 transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs text-heritage-600">{category.count} items</p>
              </button>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-white border-2 border-heritage-300 text-heritage-900 rounded-lg hover:bg-heritage-50 transition-colors font-medium">
            {t('exploreCategories.viewAllButton')}
          </button>
        </div>
      </div>
    </section>
  );
}
