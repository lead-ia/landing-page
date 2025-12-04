import { useTranslations, TranslationKeys } from "@/context/LanguageContext";
import { LandingHeader } from "@/components/home/LandingHeader";
import { LandingFooter } from "@/components/home/LandingFooter";

export const TermsOfService = () => {
  const { forKey: t } = useTranslations();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 max-w-4xl flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-slate-900">
          {t(TranslationKeys.terms_title)}
        </h1>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <p className="text-lg leading-relaxed">
            {t(TranslationKeys.terms_intro)}
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-slate-900">
              {t(TranslationKeys.terms_section_1_title)}
            </h2>
            <p>{t(TranslationKeys.terms_section_1_content)}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-slate-900">
              {t(TranslationKeys.terms_section_2_title)}
            </h2>
            <p>{t(TranslationKeys.terms_section_2_content)}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-slate-900">
              {t(TranslationKeys.terms_section_3_title)}
            </h2>
            <p>{t(TranslationKeys.terms_section_3_content)}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-slate-900">
              {t(TranslationKeys.terms_section_4_title)}
            </h2>
            <p>{t(TranslationKeys.terms_section_4_content)}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-slate-900">
              {t(TranslationKeys.terms_section_5_title)}
            </h2>
            <p>{t(TranslationKeys.terms_section_5_content)}</p>
          </section>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
};
