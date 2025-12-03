import { useTranslations, TranslationKeys } from "@/context/LanguageContext";

export function LandingFooter() {
  const { forKey } = useTranslations();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            LeadIA — Secretária Virtual Inteligente para Médicos &copy;
            {new Date().getFullYear()}. {forKey(TranslationKeys.footer_rights)}
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              {forKey(TranslationKeys.footer_terms)}
            </a>
            <a href="#" className="hover:text-white">
              {forKey(TranslationKeys.footer_privacy)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
