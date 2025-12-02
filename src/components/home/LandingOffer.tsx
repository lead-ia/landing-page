import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Sparkles, Clock, ShieldCheck, UserPlus } from "lucide-react";
import { useTranslations, TranslationKeys } from "@/context/LanguageContext";

export function LandingOffer() {
    const { forKey } = useTranslations();

    const benefits = [
        { icon: Sparkles, text: TranslationKeys.offer_benefit_1 },
        { icon: Check, text: TranslationKeys.offer_benefit_2 },
        { icon: UserPlus, text: TranslationKeys.offer_benefit_3 },
        { icon: ShieldCheck, text: TranslationKeys.offer_benefit_4 },
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Card className="border-2 border-primary/10 overflow-hidden relative shadow-2xl bg-white p-0">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#91ebfb] to-primary"></div>
                        <div className="grid md:grid-cols-2">
                            <div className="p-8 md:p-12 bg-primary text-primary-foreground flex flex-col justify-center">
                                <Badge variant="outline" className="mb-4 text-primary-foreground">
                                    {forKey(TranslationKeys.offer_badge)}
                                </Badge>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    {forKey(TranslationKeys.offer_title)}
                                </h2>
                                <p className="text-blue-100 mb-8 text-lg">
                                    {forKey(TranslationKeys.offer_desc)}
                                </p>
                                <div className="flex items-center gap-3 text-sm bg-white/10 p-4 rounded-lg border border-white/10">
                                    <Clock className="h-5 w-5 text-primary-foreground shrink-0" />
                                    <p>
                                        <span className="font-semibold text-primary-foreground">{forKey(TranslationKeys.offer_limited)}</span> {forKey(TranslationKeys.offer_limited_desc)}
                                    </p>
                                </div>
                            </div>

                            <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">{forKey(TranslationKeys.offer_list_title)}</h3>
                                <ul className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-primary/15 flex items-center justify-center text-primary shrink-0">
                                                <benefit.icon className="h-4 w-4" />
                                            </div>
                                            <span className="text-slate-700 font-medium">{forKey(benefit.text)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
