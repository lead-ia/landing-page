import { Badge } from "@/components/ui/badge";
import { Clock, XCircle,  TrendingUp } from "lucide-react";
import { useTranslations, TranslationKeys } from "@/context/LanguageContext";

export function LandingProblem() {
  const { forKey } = useTranslations();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-red-100 rounded-full blur-2xl opacity-50"></div>
              <div className="relative rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] bg-slate-300 text-center border border-slate-200 overflow-none">
                <img
                  src="/frust.webp"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/30 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50">
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              A maioria dos consultórios perde pacientes <br />
              <span className="text-red-500">
                antes mesmo da primeira consulta
              </span>
            </h2>
            <p className="text-lg text-primary mb-8">
              {forKey(TranslationKeys.problem_description)}
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">
                    {forKey(TranslationKeys.problem_point_1_title)}
                  </h3>
                  <p className="text-slate-600">
                    {forKey(TranslationKeys.problem_point_1_desc)}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">
                    {forKey(TranslationKeys.problem_point_2_title)}
                  </h3>
                  <p className="text-slate-600">
                    {forKey(TranslationKeys.problem_point_2_desc)}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-sm text-slate-500 italic">
              {forKey(TranslationKeys.problem_source)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
