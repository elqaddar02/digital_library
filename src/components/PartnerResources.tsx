import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import bgExposition from '../assets/images/ressources/background.jpg';

interface Partner {
    id: string;
    name: string;
    description: string;
    logo: string;
    url: string;
    category: string;
}

export default function PartnerResources() {
    const { t } = useTranslation();

    const partners: Partner[] = [
        {
            id: '1',
            name: 'UNESCO',
            description: 'International partnerships for cultural heritage preservation and digital access initiatives.',
            logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=120&fit=crop&q=80',
            url: '#',
            category: 'International'
        },
        {
            id: '2',
            name: 'DCMI',
            description: 'Dublin Core Metadata Initiative standards for digital resource organization and interoperability.',
            logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=120&fit=crop&q=80',
            url: '#',
            category: 'Standards'
        },
        {
            id: '3',
            name: 'Internet Archive',
            description: 'Global collaborative archive providing open access to cultural and historical materials.',
            logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=120&fit=crop&q=80',
            url: '#',
            category: 'Archive'
        },
        {
            id: '4',
            name: 'IFLA',
            description: 'International Federation of Library Associations advancing professional standards and best practices.',
            logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=120&fit=crop&q=80',
            url: '#',
            category: 'Network'
        },
        {
            id: '5',
            name: 'OpenGLAM',
            description: 'Open collaboration framework for galleries, libraries, archives, and museums worldwide.',
            logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=120&fit=crop&q=80',
            url: '#',
            category: 'Community'
        },
        {
            id: '6',
            name: 'Europeana',
            description: 'European digital cultural heritage platform providing unified access to millions of resources.',
            logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=120&fit=crop&q=80',
            url: '#',
            category: 'Platform'
        }
    ];

    return (
        <section
            className="relative py-20 md:py-28 overflow-hidden"

        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bgExposition})`,
                    opacity: 0.2, // Adjust this value (0.4 = 40% opacity)
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
             <div className="absolute inset-0 bg-amber-200/10"  />
            {/* Dark Overlay */}
            {/* <div className="absolute inset-0 bg-black/10" /> */}

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl text-heritage-900 mb-4">
                        {t('partnerResources.title')}
                    </h2>
                    <p className="text-lg text-heritage-700 max-w-2xl mx-auto">
                        {t('partnerResources.description')}
                    </p>
                </div>

                {/* Partner Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {partners.map((partner) => (
                        <article
                            key={partner.id}
                            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-heritage-100 hover:border-gold-200 flex flex-col h-full"
                        >
                            {/* Logo Container */}
                            <div className="bg-heritage-50 p-6 h-28 flex items-center justify-center overflow-hidden border-b border-heritage-100 group-hover:bg-heritage-100 transition-colors duration-300">
                                <img
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                {/* Partner Name */}
                                <h3 className="font-serif text-lg text-heritage-900 font-semibold mb-1 group-hover:text-gold-600 transition-colors">
                                    {partner.name}
                                </h3>

                                {/* Category Badge */}
                                <span className="inline-block text-xs font-medium text-heritage-600 uppercase tracking-wide mb-3 w-fit">
                                    {partner.category}
                                </span>

                                {/* Description */}
                                <p className="text-sm text-heritage-600 leading-relaxed mb-6 flex-1">
                                    {partner.description}
                                </p>

                                {/* Secondary CTA */}
                                <a
                                    href={partner.url}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-gold-600 hover:text-gold-700 group/link transition-colors"
                                    aria-label={`Explore ${partner.name} resources`}
                                >
                                    {t('partnerResources.cta')}
                                    <ExternalLink className="w-4 h-4 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-100 mb-6 text-sm">
                        {t('partnerResources.footerText')}
                    </p>
                    <button className="px-6 py-3 border-2 border-white text-white rounded-sm hover:bg-white/10 transition-colors font-medium text-sm">
                        {t('partnerResources.footerCta')}
                    </button>
                </div>
            </div>
        </section>
    );
}
