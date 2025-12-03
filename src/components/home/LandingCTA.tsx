import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslations, TranslationKeys } from "@/context/LanguageContext";

export function LandingCTA() {
    const navigate = useNavigate();
    const { forKey } = useTranslations();

    const handleCtaClick = () => {
        navigate("/contact");
    };

    return (
        <section className="py-20 bg-primary/15 text-primary">
            <div className="max-w-3xl mx-auto text-center p-4 lg:p-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {forKey(TranslationKeys.cta_title)}
                </h2>
                <p className="text-xl text-background-foreground mb-10">
                    {forKey(TranslationKeys.cta_desc)}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" onClick={handleCtaClick}>
                        {forKey(TranslationKeys.cta_button)}
                        <ArrowRight />
                    </Button>
                </div>
            </div>
            <div className="text-center">
                <p className="mt-8 text-foreground/60 text-sm">
                    {forKey(TranslationKeys.cta_disclaimer)}
                </p>
            </div>
        </section>
    );
}
