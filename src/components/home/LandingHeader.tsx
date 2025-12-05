import {
  useTranslations,
  useCurrentLanguage,
  TranslationKeys,
} from "@/context/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "../theme-provider";

export function LandingHeader() {
  const { forKey } = useTranslations();
  const { theme } = useTheme();
  const { currentLanguage, setLanguage } = useCurrentLanguage();
  const imgName = theme === "dark" ? "dark_logo.png" : "light_logo.png";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="overflow-hidden h-16 flex items-center">
          <img
            src={imgName}
            alt="LeadIA Logo"
            className="h-12 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling?.classList.remove("hidden");
            }}
          />
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Select
            value={currentLanguage}
            onValueChange={(val: "en" | "pt") => setLanguage(val)}
          >
            <SelectTrigger className="w-[70px] h-9 border-none bg-transparent focus:ring-0">
              <SelectValue
                placeholder={forKey(TranslationKeys.header_lang_placeholder)}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">
                {forKey(TranslationKeys.header_lang_en)}
              </SelectItem>
              <SelectItem value="pt">
                {forKey(TranslationKeys.header_lang_pt)}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}
