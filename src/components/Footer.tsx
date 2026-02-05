import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-heritage-900 text-heritage-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Institution Info */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg text-white mb-4 font-semibold">
              {t('footer.institution')}
            </h3>
            <p className="text-sm text-heritage-300 leading-relaxed mb-6">
              {t('footer.institutionDescription')}
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-heritage-800 hover:bg-gold-600 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-heritage-800 hover:bg-gold-600 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-heritage-800 hover:bg-gold-600 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-heritage-800 hover:bg-gold-600 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Collections & Browse */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              {t('footer.collections')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.browseCollections')}
                </a>
              </li>
              <li>
                <a href="#" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.themes')}
                </a>
              </li>
              <li>
                <a href="#" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.exhibitions')}
                </a>
              </li>
              <li>
                <a href="#" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.recentAdditions')}
                </a>
              </li>
              <li>
                <a href="#" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.researchers')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              {t('footer.aboutInstitution')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a href="#" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.mission')}
                </a>
              </li>
              <li>
                <a href="#" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.partnerships')}
                </a>
              </li>
              <li>
                <a href="#" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.news')}
                </a>
              </li>
              <li>
                <a href="#" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.careers')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Policy */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a href="#" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.copyright')}
                </a>
              </li>
              <li>
                <a href="#" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.accessibility')}
                </a>
              </li>
              <li>
                <a href="#" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.sitemap')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-400 flex-shrink-0" strokeWidth={1.5} />
                <div className="text-heritage-300">
                  <div>{t('footer.address')}</div>
                  <div className="text-xs text-heritage-400">{t('footer.city')}</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+1234567890" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.phone')}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@library.gov" className="text-heritage-300 hover:text-gold-400 transition-colors">
                  {t('footer.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-heritage-800" />

        {/* Footer Bottom */}
        <div className="pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Copyright */}
            <div className="text-xs text-heritage-400">
              <p>{t('footer.copyright')} © {new Date().getFullYear()}</p>
              <p className="mt-1">{t('footer.allRights')}</p>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-wrap gap-4 text-xs">
              <a href="#" className="text-heritage-400 hover:text-gold-400 transition-colors">
                {t('footer.reportIssue')}
              </a>
              <span className="text-heritage-700">•</span>
              <a href="#" className="text-heritage-400 hover:text-gold-400 transition-colors">
                {t('footer.feedback')}
              </a>
              <span className="text-heritage-700">•</span>
              <a href="#" className="text-heritage-400 hover:text-gold-400 transition-colors">
                {t('footer.status')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
