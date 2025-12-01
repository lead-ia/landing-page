import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, CalendarCheck, Rocket } from "lucide-react";
import { useTranslations, TranslationKeys } from "@/context/LanguageContext";

export function LandingHowItWorks() {
    const { forKey } = useTranslations();

    const steps = [
        {
            icon: BrainCircuit,
            title: TranslationKeys.how_step_1_title,
            description: TranslationKeys.how_step_1_desc
        },
        {
            icon: CalendarCheck,
            title: TranslationKeys.how_step_2_title,
            description: TranslationKeys.how_step_2_desc
        },
        {
            icon: Rocket,
            title: TranslationKeys.how_step_3_title,
            description: TranslationKeys.how_step_3_desc
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4">{forKey(TranslationKeys.how_badge)}</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        {forKey(TranslationKeys.how_title)}
                    </h2>
                    <p className="text-lg text-slate-600">
                        {forKey(TranslationKeys.how_desc)}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <Card key={index} className="border-slate-200 bg-white shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#130157]"></div>
                            <CardContent className="p-8 flex flex-col items-center text-center h-full">
                                <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mb-6 text-[#130157]">
                                    <step.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{forKey(step.title)}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {forKey(step.description)}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
