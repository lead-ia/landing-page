import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Check,
  ShieldAlert,
  Calendar,
  Heart,
  MessageSquare,
  ShieldCheck,
  FileX,
  Workflow,
  CalendarClock,
  BrainCircuit,
  CalendarCheck2,
  UserStar,
} from "lucide-react";
import { useTranslations, TranslationKeys } from "@/context/LanguageContext";

export function LandingSolution() {
  const { forKey } = useTranslations();

  const capabilities = [
    { icon: Heart, text: TranslationKeys.scope_does_1 },
    { icon: BrainCircuit, text: TranslationKeys.scope_does_2 },
    { icon: UserStar, text: TranslationKeys.scope_does_customizable },
    { icon: Calendar, text: TranslationKeys.scope_does_4 },
    { icon: Workflow, text: TranslationKeys.scope_does_5 },
    { icon: CalendarClock, text: TranslationKeys.scope_does_6 },
    { icon: MessageSquare, text: TranslationKeys.scope_does_7 },
    { icon: CalendarCheck2, text: TranslationKeys.scope_does_8 },
  ];

  const limitations = [
    { text: TranslationKeys.scope_limit_1 },
    { text: TranslationKeys.scope_limit_2 },
    { text: TranslationKeys.scope_limit_3 },
    { text: TranslationKeys.scope_limit_4 },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            {forKey(TranslationKeys.solution_badge)}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {forKey(TranslationKeys.solution_title_1)} <br />
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-[#91ebfb] to-primary">
              {forKey(TranslationKeys.solution_title_2)}
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            LeadIA — A secretária que nunca falha. Nunca atrasa. Nunca esquece.
            Ela executa o que uma secretária faria — só que com consistência
            absoluta.E da maneira que você faria: seguindo seu processo padrão,
            sua comunicação e sua cultura de consultório
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* What LeadIA Does */}
          <Card className="border-green-100 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                  <Check className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-primary">
                  {forKey(TranslationKeys.scope_does_title)}
                </CardTitle>
              </div>
              <p className="text-slate-600 text-sm">
                {forKey(TranslationKeys.scope_does_desc)}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4">
                {capabilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">
                      {forKey(item.text)}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What LeadIA Does NOT Do */}
          <Card className="border-slate-200 bg-slate-50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center text-slate-600">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-primary">
                  {forKey(TranslationKeys.scope_limits_title)}
                </CardTitle>
              </div>
              <p className="text-slate-600 text-sm">
                {forKey(TranslationKeys.scope_limits_desc)}
              </p>
            </CardHeader>
            <CardContent>
              <div className="mb-6 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 text-slate-800 font-semibold mb-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span>{forKey(TranslationKeys.scope_limits_safe)}</span>
                </div>
                <p className="text-sm text-slate-600">
                  {forKey(TranslationKeys.scope_limits_safe_desc)}
                </p>
              </div>
              <ul className="space-y-4">
                {limitations.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 opacity-75"
                  >
                    <FileX className="h-5 w-5 text-slate-400 shrink-0" />
                    <span className="text-slate-600 line-through decoration-slate-400">
                      {forKey(item.text)}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="md:col-span-1 border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-500">
                {forKey(TranslationKeys.solution_traditional_title)}
              </CardTitle>
              <CardDescription>
                {forKey(TranslationKeys.solution_traditional_desc)}
              </CardDescription>
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
                  <span>{forKey(TranslationKeys.solution_trad_5)}</span>
                </li>
              </ul>
            </CardContent>
          </Card> */}

        {/* <Card className="md:col-span-2 border-primary/20 bg-primary/5 relative ring-2 ring-primary shadow-xl">
            <div className="absolute -top-[1px] -right-[1px] bg-primary text-primary-foreground text-xs font-bold px-3 rounded-bl-lg rounded-tr-lg">
              {forKey(TranslationKeys.solution_recommended)}
            </div>
            <CardHeader>
              <CardTitle className="text-primary text-2xl">
                {forKey(TranslationKeys.solution_leadia_title)}
              </CardTitle>
              <CardDescription className="text-primary/80">
                {forKey(TranslationKeys.solution_leadia_desc)}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4 lg:gap-6">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-800">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">
                    {forKey(TranslationKeys.solution_leadia_1)}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-800">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">
                    {forKey(TranslationKeys.solution_leadia_2)}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-800">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">
                    {forKey(TranslationKeys.solution_leadia_3)}
                  </span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-800">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">
                    {forKey(TranslationKeys.solution_leadia_4)}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-800">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">
                    {forKey(TranslationKeys.solution_leadia_5)}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-800">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">
                    {forKey(TranslationKeys.solution_leadia_6)}
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card> */}
        {/* </div> */}
      </div>
    </section>
  );
}
