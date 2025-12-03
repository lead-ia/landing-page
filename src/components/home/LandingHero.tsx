import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MessageCircle, ArrowRight, Calendar, UserCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslations, TranslationKeys } from "@/context/LanguageContext";

export function LandingHero() {
    const navigate = useNavigate();
    const { forKey } = useTranslations();

    const handleCtaClick = () => {
        navigate("/contact");
    };

    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                        {forKey(TranslationKeys.hero_title_1)} <br className="hidden md:block" />
                        <span className="bg-gradient-to-r bg-clip-text text-transparent from-[#91ebfb] to-primary">{forKey(TranslationKeys.hero_title_2)}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                        {forKey(TranslationKeys.hero_description)}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" onClick={handleCtaClick} className="w-full sm:w-auto">
                            {forKey(TranslationKeys.hero_cta_primary)}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Hero Cards/Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {[
                        { icon: Clock, title: TranslationKeys.hero_feature_1_title, desc: TranslationKeys.hero_feature_1_desc },
                        { icon: Calendar, title: TranslationKeys.hero_feature_2_title, desc: TranslationKeys.hero_feature_2_desc },
                        { icon: UserCheck, title: TranslationKeys.hero_feature_3_title, desc: TranslationKeys.hero_feature_3_desc },
                        { icon: MessageCircle, title: TranslationKeys.hero_feature_4_title, desc: TranslationKeys.hero_feature_4_desc },
                    ].map((feature, index) => (
                        <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/50 backdrop-blur-sm">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg text-slate-900 mb-2">{forKey(feature.title)}</h3>
                                <p className="text-slate-600 text-sm">{forKey(feature.desc)}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
            </div>
        </section>
    );
}
