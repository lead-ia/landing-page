import { useTranslations, TranslationKeys } from "@/context/LanguageContext";

export function LandingFooter() {
    const { forKey } = useTranslations();

    return (
        <footer className="bg-slate-900 text-slate-400 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl font-bold text-white">LeadIA</span>
                        </div>
                        <p className="max-w-xs">
                            {forKey(TranslationKeys.footer_desc)}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">{forKey(TranslationKeys.footer_product)}</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">{forKey(TranslationKeys.footer_features)}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{forKey(TranslationKeys.footer_pricing)}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{forKey(TranslationKeys.footer_security)}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">{forKey(TranslationKeys.footer_company)}</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">{forKey(TranslationKeys.footer_about)}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{forKey(TranslationKeys.footer_contact)}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{forKey(TranslationKeys.footer_privacy)}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} LeadIA. {forKey(TranslationKeys.footer_rights)}</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">{forKey(TranslationKeys.footer_terms)}</a>
                        <a href="#" className="hover:text-white">{forKey(TranslationKeys.footer_privacy)}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
