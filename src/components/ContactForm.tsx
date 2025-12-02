import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import {
  useContactRepository,
  type ContactFormData,
} from "@/repository/contact-repository";
import { useContactRepositoryProvider } from "@/context/ContactRepositoryContext";
import SelectSpecialtyButton from "./SelectSpecialtyButton";

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    language: "",
    specialty: "",
  });

  const navigate = useNavigate();
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
      showErrorToast("Please select a specialty");
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
      navigate("/start-chat");
    }

    if (contactResponse.error) {
      showErrorToast();
    }
  }, [contactResponse]);

  const showErrorToast = (message?: string) => {
    toast(message || "Error sending contact form");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>
            Fill in your details and we'll get back to you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <PhoneInput
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
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
                  Submit
                </>
              ) : (
                <>Submit</>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
