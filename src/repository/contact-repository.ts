import { useState } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  language: string;
  specialty?: string;
}

export interface ContactRepository {
  sendContactData(data: ContactFormData): Promise<boolean>;
}

interface ContactResponse {
  success: boolean | null;
  error: string | null;
  loading: boolean;
}

export const contactRepository: ContactRepository = {
  sendContactData: async (data: ContactFormData) => {
    try {
      const response = await fetch('https://workflow.leadia.com.br/webhook/register-lead', {
        method: 'POST',
        headers: {
          'x-app-secret': import.meta.env.VITE_LEADIA_API_SECRET,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: data.name,
          phonenumber: data.phone,
          email: data.email,
          specialty: data.specialty,
        }),
      });

      const result = await response.json();

      console.log(result);

      if (result.status === 'success') {
        return true;
      } else {
        throw new Error(result.message || 'Failed to register lead');
      }
    } catch (error) {
      console.error('Error sending contact data:', error);
      throw error;
    }
  },
};

export function useContactRepository(repository: ContactRepository) {
  const [contactResponse, setContactResponse] = useState<ContactResponse>({ loading: false, error: null, success: null });

  async function sendContactData(data: ContactFormData) {
    setContactResponse({ loading: true, error: null, success: null });

    try {
      const success = await repository.sendContactData(data);
      setContactResponse({
        success: success,
        error: null,
        loading: false,
      });
    } catch (error) {
      setContactResponse({
        success: null,
        error: 'Failed to send contact form',
        loading: false,
      });
    }
  }

  return {
    sendContactData,
    contactResponse,
  };
};

