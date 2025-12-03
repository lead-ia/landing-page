import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations, TranslationKeys } from "@/context/LanguageContext";
import { Clock, Shield, Star } from "lucide-react";

export function LandingTargetAudience() {
  const { forKey } = useTranslations();

  const features = [
    {
      icon: Clock,
      title: forKey(TranslationKeys.target_point_1_title),
      desc: forKey(TranslationKeys.target_point_1_desc),
    },
    {
      icon: Star,
      title: forKey(TranslationKeys.target_point_2_title),
      desc: forKey(TranslationKeys.target_point_2_desc),
    },
    {
      icon: Shield,
      title: forKey(TranslationKeys.target_point_3_title),
      desc: forKey(TranslationKeys.target_point_3_desc),
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            {forKey(TranslationKeys.target_badge)}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {forKey(TranslationKeys.target_title_custom)} <br />
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-[#91ebfb] to-primary">
              {forKey(TranslationKeys.target_title_custom_gradient)}
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            {forKey(TranslationKeys.target_intro)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-slate-200 bg-white shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#91ebfb] to-primary"></div>
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4 text-primary">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed text-center">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
