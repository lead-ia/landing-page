import { useTranslations, TranslationKeys } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const WaitingList = () => {
  const { forKey: t } = useTranslations();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-lg text-center shadow-lg border-t-4 border-t-primary">
        <CardHeader className="flex flex-col items-center space-y-4 pb-2">
          <div className="h-16 w-16 rounded-full bg-primary/15 flex items-center justify-center mb-2">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
            {t(TranslationKeys.waiting_list_title)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t(TranslationKeys.waiting_list_description)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
