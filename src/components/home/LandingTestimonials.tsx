import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useTranslations, TranslationKeys } from "@/context/LanguageContext";

export function LandingTestimonials() {
  const { forKey } = useTranslations();

  const testimonials = [
    {
      text: TranslationKeys.testimonial_1_text,
      author: TranslationKeys.testimonial_1_author,
      role: TranslationKeys.testimonial_1_role,
    },
    {
      text: TranslationKeys.testimonial_2_text,
      author: TranslationKeys.testimonial_2_author,
      role: TranslationKeys.testimonial_2_role,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            {forKey(TranslationKeys.testimonials_badge)}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {forKey(TranslationKeys.testimonials_title)}
          </h2>
          <p className="text-lg text-slate-600">
            {forKey(TranslationKeys.testimonials_desc)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="border-slate-200 bg-white hover:shadow-md transition-all"
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 text-primary/40">
                  <Quote className="h-10 w-10" />
                </div>
                <p className="text-slate-700 mb-6 flex-grow italic leading-relaxed">
                  "{forKey(item.text)}"
                </p>
                <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-4">
                  <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                    {forKey(item.author).charAt(4)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">
                      {forKey(item.author)}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {forKey(item.role)}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-3 w-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
