import { Badge } from "@/components/ui/badge";
import { Clock, XCircle, TrendingUp } from "lucide-react";
import { useTranslations, TranslationKeys } from "@/context/LanguageContext";

export function LandingProblem() {
  const { forKey } = useTranslations();

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] text-center overflow-none">
                <img
                  src="/frust.webp"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-card/30 backdrop-blur-md p-4 rounded-xl shadow-lg border border-border/50">
                <div className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-100">
                      {forKey(TranslationKeys.problem_card_title)}
                    </p>
                    <p className="text-sm text-slate-200">
                      {forKey(TranslationKeys.problem_card_desc)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Badge
              variant="outline"
              className="mb-4 border-red-200 text-red-600 bg-red-50"
            >
              {forKey(TranslationKeys.problem_badge)}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A maioria dos consultórios perde pacientes <br />
              <span className="text-red-500">
                antes mesmo da primeira consulta
              </span>
            </h2>
            <p className="text-lg text-foreground mb-8">
              {forKey(TranslationKeys.problem_description)}
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {forKey(TranslationKeys.problem_point_1_title)}
                  </h3>
                  <p className="text-muted-foreground">
                    {forKey(TranslationKeys.problem_point_1_desc)}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {forKey(TranslationKeys.problem_point_2_title)}
                  </h3>
                  <p className="text-muted-foreground">
                    {forKey(TranslationKeys.problem_point_2_desc)}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-sm text-muted-foreground italic">
              {forKey(TranslationKeys.problem_source)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
