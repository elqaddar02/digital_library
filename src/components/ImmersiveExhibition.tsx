import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import background from '../assets/images/exposition/BG-EXPOSITION.png';
import featured from '../assets/images/exposition/Featured.jpg';


export default function ImmersiveExhibition() {
  const { t } = useTranslation();

  const handleDiscoverExhibition = () => {
    console.log('Discovering exhibition...');
    // Navigate to exhibition page
  };

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
          backgroundAttachment: 'fixed'
        }}
        aria-hidden="true"
      />
      
      {/* Dark Overlay Layer - On top of image */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Content Layer - On top of overlay */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Editorial Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left - Featured Image */}
            <div className="lg:col-span-6">
              <figure className="m-0">
                <div className="relative overflow-hidden rounded-sm shadow-lg bg-heritage-100">
                  <img
                    src={featured}
                    alt="Curated exhibition collection"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <figcaption className="text-xs text-white/80 mt-3 italic">
                  Featured exhibition collection
                </figcaption>
              </figure>
            </div>

            {/* Right - Editorial Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Section Designation */}
              <span className="text-xs font-semibold text-gold-300 uppercase tracking-widest mb-3 inline-block">
                {t('immersiveExhibition.label')}
              </span>

              {/* Exhibition Title */}
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-snug">
                {t('immersiveExhibition.title')}
              </h2>

              {/* Thematic Description */}
              <div className="space-y-4 mb-8">
                <p className="text-base text-gray-100 leading-relaxed">
                  {t('immersiveExhibition.description')}
                </p>
                <p className="text-base text-gray-200 leading-relaxed">
                  {t('immersiveExhibition.narrative')}
                </p>
              </div>

              {/* Institutional CTA */}
              <div className="flex items-center pt-2">
                <button
                  onClick={handleDiscoverExhibition}
                  className="inline-flex items-center gap-2 px-6 py-3 text-white border-2 border-white rounded-sm hover:bg-white/10 transition-colors duration-300 font-medium group text-sm"
                >
                  {t('immersiveExhibition.cta')}
                  <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

