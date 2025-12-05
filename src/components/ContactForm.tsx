import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/PhoneInput";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  useContactRepository,
  type ContactFormData,
} from "@/repository/contact-repository";
import { useContactRepositoryProvider } from "@/context/ContactRepositoryContext";
import SelectSpecialtyButton from "./SelectSpecialtyButton";
import { useTranslations, TranslationKeys } from "@/context/LanguageContext";

export const ContactForm = () => {
  const navigate = useNavigate();
  const { forKey: t } = useTranslations();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    language: "",
    specialty: "",
  });

  const repository = useContactRepositoryProvider();
  const { sendContactData, contactResponse } = useContactRepository(repository);
  const [selectingOtherSpecialty, setSelectingOtherSpecialty] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.specialty?.length == 0) {
      showErrorToast(t(TranslationKeys.contact_error_specialty));
      return;
    }

    sendContactData(formData);
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const handleSpecialtyChange = (specialty: string) => {
    setFormData((prev) => ({
      ...prev,
      specialty: specialty,
    }));
  };

  const onSelectOtherSpecialty = (selectingOther: boolean) => {
    setSelectingOtherSpecialty(selectingOther);
  };

  useEffect(() => {
    if (!contactResponse) return;

    if (contactResponse.success) {
      navigate("/waiting-list", { replace: true });
    }

    if (contactResponse.error) {
      showErrorToast();
    }
  }, [contactResponse]);

  const showErrorToast = (message?: string) => {
    toast(message || t(TranslationKeys.contact_error_general));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>{t(TranslationKeys.contact_title)}</CardTitle>
          <CardDescription>
            {t(TranslationKeys.contact_description)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">
                {t(TranslationKeys.contact_name_label)}
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder={t(TranslationKeys.contact_name_placeholder)}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                {t(TranslationKeys.contact_email_label)}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t(TranslationKeys.contact_email_placeholder)}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                {t(TranslationKeys.contact_phone_label)}
              </Label>
              <PhoneInput
                id="phone"
                name="phone"
                placeholder={t(TranslationKeys.contact_phone_placeholder)}
                value={formData.phone}
                onChange={handlePhoneChange}
                required
              />
            </div>

            <SelectSpecialtyButton
              contactFormData={formData}
              selectingOtherSpecialty={selectingOtherSpecialty}
              onSelectOtherSpecialty={onSelectOtherSpecialty}
              onSpecialtyChange={handleSpecialtyChange}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={contactResponse.loading}
            >
              {contactResponse.loading ? (
                <>
                  <Spinner />
                  {t(TranslationKeys.contact_submit)}
                </>
              ) : (
                <>{t(TranslationKeys.contact_submit)}</>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
