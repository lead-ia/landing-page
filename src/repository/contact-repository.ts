import { useState } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  language: string;
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
    // TODO: implement this
    await new Promise(resolve => setTimeout(resolve, 2000));
    throw new Error('Yooooooooooooooo')
    return true;
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

