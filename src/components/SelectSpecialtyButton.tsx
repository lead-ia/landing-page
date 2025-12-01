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

const doctorSpecialties = [
  "Anesthesiology",
  "Cardiology",
  "Dermatology",
  "Emergency Medicine",
  "Family Medicine",
  "Gastroenterology",
  "Internal Medicine",
  "Neurology",
  "Obstetrics and Gynecology",
  "Oncology",
  "Orthopedic Surgery",
  "Pediatrics",
  "Psychiatry",
  "Radiology",
  "Surgery",
  "Other",
];

function SelectSpecialtyButton(props: {
  contactFormData: ContactFormData;
  selectingOtherSpecialty: boolean;
  onSelectOtherSpecialty: (selectingOther: boolean) => void;
  onSpecialtyChange: (specialty: string) => void;
}) {
  function handleSpecialtyChange(value: string) {
    const selectedOther = value === "Other";
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
        <Label htmlFor="specialty">Doctor Specialty</Label>
        <Select
          value={
            props.selectingOtherSpecialty
              ? "Other"
              : props.contactFormData.specialty
          }
          onValueChange={handleSpecialtyChange}
        >
          <SelectTrigger id="specialty" className="w-full">
            <SelectValue placeholder="Select your specialty" />
          </SelectTrigger>
          <SelectContent>
            {doctorSpecialties.map((specialty) => (
              <SelectItem key={specialty} value={specialty}>
                {specialty}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {props.selectingOtherSpecialty && (
        <div className="space-y-2">
          <Label htmlFor="otherSpecialty">Specify Your Specialty</Label>
          <Input
            id="otherSpecialty"
            name="otherSpecialty"
            type="text"
            placeholder="Enter your specialty"
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
