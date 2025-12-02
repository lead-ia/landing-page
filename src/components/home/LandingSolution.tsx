import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";
import { useTranslations, TranslationKeys } from "@/context/LanguageContext";

export function LandingSolution() {
  const { forKey } = useTranslations();

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">{forKey(TranslationKeys.solution_badge)}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {forKey(TranslationKeys.solution_title_1)} <br />
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-[#91ebfb] to-primary">{forKey(TranslationKeys.solution_title_2)}</span>
          </h2>
          <p className="text-lg text-slate-600">
            {forKey(TranslationKeys.solution_description)}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Traditional Secretary */}
          <Card className="md:col-span-1 border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-500">{forKey(TranslationKeys.solution_traditional_title)}</CardTitle>
              <CardDescription>{forKey(TranslationKeys.solution_traditional_desc)}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-slate-500">
                  <XCircle className="h-5 w-5 text-red-400" />
                  <span>{forKey(TranslationKeys.solution_trad_1)}</span>
                </li>
                <li className="flex items-center gap-2 text-slate-500">
                  <XCircle className="h-5 w-5 text-red-400" />
                  <span>{forKey(TranslationKeys.solution_trad_2)}</span>
                </li>
                <li className="flex items-center gap-2 text-slate-500">
                  <XCircle className="h-5 w-5 text-red-400" />
                  <span>{forKey(TranslationKeys.solution_trad_3)}</span>
                </li>
                <li className="flex items-center gap-2 text-slate-500">
                  <XCircle className="h-5 w-5 text-red-400" />
                  <span>{forKey(TranslationKeys.solution_trad_4)}</span>
                </li>
                <li className="flex items-center gap-2 text-slate-500">
                  <XCircle className="h-5 w-5 text-red-400" />
                  <span>Não faz um bom follow up</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* LeadIA */}
          <Card className="md:col-span-2 border-primary/20 bg-primary/5 relative ring-2 ring-primary shadow-xl">
            <div className="absolute -top-[1px] -right-[1px] bg-primary text-primary-foreground text-xs font-bold px-3 rounded-bl-lg rounded-tr-lg">
              {forKey(TranslationKeys.solution_recommended)}
            </div>
            <CardHeader>
              <CardTitle className="text-primary text-2xl">{forKey(TranslationKeys.solution_leadia_title)}</CardTitle>
              <CardDescription className="text-primary/80">{forKey(TranslationKeys.solution_leadia_desc)}</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4 lg:gap-6">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-800">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">{forKey(TranslationKeys.solution_leadia_1)}</span>
                </li>
                <li className="flex items-center gap-3 text-slate-800">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">{forKey(TranslationKeys.solution_leadia_2)}</span>
                </li>
                <li className="flex items-center gap-3 text-slate-800">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">{forKey(TranslationKeys.solution_leadia_3)}</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-800">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">{forKey(TranslationKeys.solution_leadia_4)}</span>
                </li>
                <li className="flex items-center gap-3 text-slate-800">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">{forKey(TranslationKeys.solution_leadia_5)}</span>
                </li>
                <li className="flex items-center gap-3 text-slate-800">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">{forKey(TranslationKeys.solution_leadia_6)}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
