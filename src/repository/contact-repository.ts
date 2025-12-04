import { useReferral } from '@/context/ReferralContext';
import { useState } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  language: string;
  specialty?: string;
}

export interface ContactRepository {
  sendContactData(data: ContactFormData, isReferral?: boolean): Promise<boolean>;
}

interface ContactResponse {
  success: boolean | null;
  error: string | null;
  loading: boolean;
}

export const contactRepository: ContactRepository = {
  sendContactData: async (data: ContactFormData, isReferral?: boolean) => {
    try {
      let basePath = 'https://workflow.leadia.com.br/webhook';
      if (isReferral) {
        basePath += '/tonton';
      }
      else {
        basePath += '/register-lead';
      }
      const response = await fetch(basePath, {
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
  const { isReferral } = useReferral();
  const [contactResponse, setContactResponse] = useState<ContactResponse>({ loading: false, error: null, success: null });

  async function sendContactData(data: ContactFormData) {
    setContactResponse({ loading: true, error: null, success: null });

    try {
      const success = await repository.sendContactData(data, isReferral);
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

