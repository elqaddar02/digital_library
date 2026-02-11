import { ExternalLink, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Partner {
    id: string;
    name: string;
    description: string;
    logo: string;
    url: string;
    category: string;
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
    'International': { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' },
    'Standards': { bg: 'bg-gold-50', text: 'text-gold-700', border: 'border-gold-200' },
    'Archive': { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' },
    'Network': { bg: 'bg-gold-50', text: 'text-gold-700', border: 'border-gold-200' },
    'Community': { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' },
    'Platform': { bg: 'bg-gold-50', text: 'text-gold-700', border: 'border-gold-200' }
};

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
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-teal-50/30 to-white">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl -ml-48 -mb-48" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center justify-center gap-2 mb-6">
                        <div className="h-1 w-8 bg-gradient-to-r from-teal-500 to-transparent" />
                        <span className="text-sm font-semibold text-teal-700 uppercase tracking-wide">Collaborations</span>
                        <div className="h-1 w-8 bg-gradient-to-l from-teal-500 to-transparent" />
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl text-heritage-900 mb-6 leading-tight">
                        {t('partnerResources.title')}
                    </h2>
                    <p className="text-lg text-heritage-600 leading-relaxed">
                        {t('partnerResources.description')}
                    </p>
                </div>

                {/* Partner Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {partners.map((partner, index) => {
                        const colors = categoryColors[partner.category] || categoryColors['International'];
                        return (
                            <article
                                key={partner.id}
                                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-heritage-100 hover:border-gold-300 flex flex-col h-full hover:-translate-y-1"
                            >
                                {/* Accent Bar */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                                    index % 2 === 0 ? 'from-teal-500 via-teal-400 to-transparent' : 'from-gold-500 via-gold-400 to-transparent'
                                }`} />

                                {/* Logo Container */}
                                <div className={`relative ${colors.bg} p-8 h-32 flex items-center justify-center overflow-hidden border-b ${colors.border} group-hover:brightness-110 transition-all duration-300`}>
                                    <img
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    {/* Partner Name */}
                                    <h3 className="font-serif text-xl text-heritage-900 font-semibold mb-2 group-hover:text-teal-700 transition-colors">
                                        {partner.name}
                                    </h3>

                                    {/* Category Badge */}
                                    <div className="mb-4">
                                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                                            <Zap className="w-3 h-3" />
                                            {partner.category}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-heritage-600 leading-relaxed mb-6 flex-1">
                                        {partner.description}
                                    </p>

                                    {/* CTA Link */}
                                    <a
                                        href={partner.url}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 group/link transition-all"
                                        aria-label={`Explore ${partner.name} resources`}
                                    >
                                        <span className="relative">
                                            {t('partnerResources.cta')}
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover/link:w-full transition-all duration-300" />
                                        </span>
                                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Footer CTA Section */}
                <div className="mt-20 pt-16 border-t border-heritage-100">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-heritage-600 mb-8 text-base leading-relaxed">
                            {t('partnerResources.footerText')}
                        </p>
                        <button className="px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5">
                            {t('partnerResources.footerCta')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
