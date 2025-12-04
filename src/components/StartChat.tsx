import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  useCurrentLanguage,
  useTranslations,
  TranslationKeys,
} from "@/context/LanguageContext";
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const leadiaPhoneNumber = "+5521959535254";
const ptMessage =
  "Olá! 👋 \n Estou interessado no LeadIA e gostaria de realizar um teste do serviço!";
const enMessage =
  "Hello! 👋 \n I'm interested in LeadIA and would like to test the service!";
export const StartChat = () => {
  const { currentLanguage } = useCurrentLanguage();
  const { forKey: t } = useTranslations();
  const message = currentLanguage === "pt" ? ptMessage : enMessage;
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${leadiaPhoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center space-y-4">
          <div className="bg-green-100 p-4 rounded-full">
            <FaWhatsapp className="h-12 w-12 text-green-600" />
          </div>
          <p className="font-medium text-center text-sm">
            {t(TranslationKeys.start_chat_message)}
          </p>

          <Button onClick={handleWhatsAppClick}>
            <MessageCircle />
            {t(TranslationKeys.start_chat_button)}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
