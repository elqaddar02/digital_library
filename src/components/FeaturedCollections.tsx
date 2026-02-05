import { BookOpen, Image, FileText, Archive } from 'lucide-react';

const collections = [
  {
    id: 1,
    title: 'Historical Manuscripts',
    description: 'Rare manuscripts from the 15th to 19th centuries documenting our nation\'s history.',
    icon: BookOpen,
    itemCount: '2,847 items',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Photographic Archives',
    description: 'Visual documentation of cultural heritage spanning over a century.',
    icon: Image,
    itemCount: '15,623 items',
    image: 'https://images.pexels.com/photos/8111856/pexels-photo-8111856.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Official Documents',
    description: 'Government records, treaties, and official correspondence of historical significance.',
    icon: FileText,
    itemCount: '4,392 items',
    image: 'https://images.pexels.com/photos/6571015/pexels-photo-6571015.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Cultural Artifacts',
    description: 'Digital records of artifacts, textiles, and material culture.',
    icon: Archive,
    itemCount: '3,156 items',
    image: 'https://images.pexels.com/photos/7412108/pexels-photo-7412108.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function FeaturedCollections() {
  return (
    <section id="collections" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-heritage-900 mb-4">
            Featured Collections
          </h2>
          <p className="text-lg text-heritage-700 max-w-2xl mx-auto">
            Explore curated collections representing our most significant cultural and historical assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {collections.map((collection) => {
            const Icon = collection.icon;
            return (
              <article
                key={collection.id}
                className="group bg-white border border-heritage-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-heritage-100">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                    <span className="text-sm font-medium">{collection.itemCount}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-heritage-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-heritage-700 mb-4 leading-relaxed">
                    {collection.description}
                  </p>
                  <button className="text-heritage-800 hover:text-gold-600 font-medium text-sm transition-colors inline-flex items-center">
                    Explore Collection
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
