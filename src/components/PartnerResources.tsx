import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import bgExposition from '../assets/images/ressources/background.jpg';
import ebsco from '../assets/images/ebsco-logo-color-screen.png';

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
            name: 'Cairn Info',
            description:
                'Plateforme académique francophone spécialisée en sciences humaines et sociales, offrant des articles et ouvrages en texte intégral.',
            logo: 'https://shs.cairn.info/build/assets/shs-fr-CNY2_Yho.svg',
            url: 'https://shs.cairn.info/',
            category: 'Academic Platform'
        },
        {
            id: '2',
            name: 'EBSCO',
            description:
                'Base de données académique internationale donnant accès à des articles scientifiques, revues et ressources de recherche multidisciplinaires.',
            logo: ebsco,
            url: 'https://research.ebsco.com/c/jtkfej/search',
            category: 'Research Database'
        },
        {
            id: '3',
            name: 'Brill',
            description:
                'Maison d’édition académique reconnue pour ses publications en sciences humaines, études islamiques, histoire et sciences sociales.',
            logo: 'https://brill.com/fileasset//fileasset/appbar/logo-brill-300x100-transparent-desktop.png',
            url: 'https://brill.com/',
            category: 'Academic Publisher'
        },
        {
            id: '4',
            name: 'Al Manhal',
            description:
                'Bibliothèque numérique arabe offrant des livres électroniques, revues académiques et thèses en langue arabe.',
            logo: 'https://assets.almanhal.com/website/ui/img/logo-default.png',
            url: 'https://platform.almanhal.com/',
            category: 'Arabic Digital Library'
        },
        {
            id: '5',
            name: 'ENI E-Learning',
            description:
                'Plateforme de formation en ligne spécialisée en informatique, programmation, réseaux et compétences numériques professionnelles.',
            logo: 'https://www.eni-training.com/instant-Connection/include/images/logo_BN_FR.svg',
            url: 'https://www.eni-training.com/cs/eni-demo-ip',
            category: 'E-Learning'
        }
    ];

    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bgExposition})`,
                    opacity: 0.2,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <div className="absolute inset-0 bg-amber-200/10" />

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
                            {/* Logo */}
                            <div className="bg-heritage-50 p-6 h-28 flex items-center justify-center overflow-hidden border-b border-heritage-100 group-hover:bg-heritage-100 transition-colors duration-300">
                                <img
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="font-serif text-lg text-heritage-900 font-semibold mb-1 group-hover:text-gold-600 transition-colors">
                                    {partner.name}
                                </h3>

                                <span className="inline-block text-xs font-medium text-heritage-600 uppercase tracking-wide mb-3 w-fit">
                                    {partner.category}
                                </span>

                                <p className="text-sm text-heritage-600 leading-relaxed mb-6 flex-1">
                                    {partner.description}
                                </p>

                                <a
                                    href={partner.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
