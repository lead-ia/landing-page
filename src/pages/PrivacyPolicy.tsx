import { useTranslations, TranslationKeys } from "@/context/LanguageContext";
import { LandingHeader } from "@/components/home/LandingHeader";
import { LandingFooter } from "@/components/home/LandingFooter";

export const PrivacyPolicy = () => {
  const { forKey: t } = useTranslations();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 max-w-4xl flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-slate-900">
          {t(TranslationKeys.privacy_title)}
        </h1>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <p className="text-lg leading-relaxed">
            {t(TranslationKeys.privacy_intro)}
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-slate-900">
              {t(TranslationKeys.privacy_section_1_title)}
            </h2>
            <p>{t(TranslationKeys.privacy_section_1_content)}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-slate-900">
              {t(TranslationKeys.privacy_section_2_title)}
            </h2>
            <p>{t(TranslationKeys.privacy_section_2_content)}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-slate-900">
              {t(TranslationKeys.privacy_section_3_title)}
            </h2>
            <p>{t(TranslationKeys.privacy_section_3_content)}</p>
          </section>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
};
