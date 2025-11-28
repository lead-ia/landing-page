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
import { Link, useNavigate } from "react-router-dom";
import {
  useContactRepository,
  type ContactFormData,
} from "@/repository/contact-repository";
import { useContactRepositoryProvider } from "@/context/ContactRepositoryContext";

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    timezone: "",
    language: "",
  });
  const navigate = useNavigate();
  const repository = useContactRepositoryProvider();
  const { sendContactData, contactResponse } = useContactRepository(repository);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendContactData(formData);
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  useEffect(() => {
    if (!contactResponse) return;

    if (contactResponse.url) {
      navigate("/start-chat");
    }

    if (contactResponse.error) {
      showErrorToast();
    }
  }, [contactResponse]);

  const showErrorToast = () => {
    toast("Error sending contact form");
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
