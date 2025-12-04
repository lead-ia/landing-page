import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import type { ContactFormData } from "@/repository/contact-repository";
import { useTranslations, TranslationKeys } from "@/context/LanguageContext";

const doctorSpecialties = [
  TranslationKeys.specialty_anesthesiology,
  TranslationKeys.specialty_cardiology,
  TranslationKeys.specialty_dermatology,
  TranslationKeys.specialty_emergency,
  TranslationKeys.specialty_family,
  TranslationKeys.specialty_gastroenterology,
  TranslationKeys.specialty_internal,
  TranslationKeys.specialty_neurology,
  TranslationKeys.specialty_obgyn,
  TranslationKeys.specialty_oncology,
  TranslationKeys.specialty_orthopedic,
  TranslationKeys.specialty_pediatrics,
  TranslationKeys.specialty_psychiatry,
  TranslationKeys.specialty_radiology,
  TranslationKeys.specialty_surgery,
  TranslationKeys.specialty_other,
];

function SelectSpecialtyButton(props: {
  contactFormData: ContactFormData;
  selectingOtherSpecialty: boolean;
  onSelectOtherSpecialty: (selectingOther: boolean) => void;
  onSpecialtyChange: (specialty: string) => void;
}) {
  const { forKey: t } = useTranslations();

  function handleSpecialtyChange(value: string) {
    const selectedOther = value === t(TranslationKeys.specialty_other);
    if (selectedOther) {
      props.onSpecialtyChange("");
      props.onSelectOtherSpecialty(true);
      return;
    }
    props.onSelectOtherSpecialty(false);
    props.onSpecialtyChange(value);
  }

  function handleOtherSpecialtyChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    props.onSpecialtyChange(value);
  }

  return (
    <>
      <div className="space-y-2 w-full">
        <Label htmlFor="specialty">{t(TranslationKeys.specialty_label)}</Label>
        <Select
          value={
            props.selectingOtherSpecialty
              ? t(TranslationKeys.specialty_other)
              : props.contactFormData.specialty
          }
          onValueChange={handleSpecialtyChange}
          required
        >
          <SelectTrigger id="specialty" className="w-full">
            <SelectValue
              placeholder={t(TranslationKeys.specialty_placeholder)}
            />
          </SelectTrigger>
          <SelectContent>
            {doctorSpecialties.map((specialtyKey) => {
              const translatedValue = t(specialtyKey);
              return (
                <SelectItem key={specialtyKey} value={translatedValue}>
                  {translatedValue}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      {props.selectingOtherSpecialty && (
        <div className="space-y-2">
          <Label htmlFor="otherSpecialty">
            {t(TranslationKeys.specialty_other_label)}
          </Label>
          <Input
            id="otherSpecialty"
            name="otherSpecialty"
            type="text"
            placeholder={t(TranslationKeys.specialty_other_placeholder)}
            value={props.contactFormData.specialty}
            onChange={handleOtherSpecialtyChange}
            required
          />
        </div>
      )}
    </>
  );
}

export default SelectSpecialtyButton;
