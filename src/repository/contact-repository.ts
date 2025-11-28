import { useState } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  timezone: string;
  language: string;
}

export interface ContactRepository {
  sendContactData(data: ContactFormData): Promise<string>;
}

interface ContactResponse {
  url: string  | null;
  error: string | null;
  loading: boolean;
}



export const contactRepository: ContactRepository = {
  sendContactData: async (data: ContactFormData) => {
    // TODO: implement this
    await new Promise(resolve => setTimeout(resolve, 2000));
    throw new Error('Yooooooooooooooo')
    return 'https://example.com/success';
  },
};

export function useContactRepository(repository: ContactRepository) {
  const [contactResponse, setContactResponse] = useState<ContactResponse>({ loading: false, error: null, url: null });

  async function sendContactData(data: ContactFormData) {
    setContactResponse({ loading: true, error: null, url: null });

    try {
      const url = await repository.sendContactData(data);
      setContactResponse({
        url: url,
        error: null,
        loading: false,
      });
    } catch (error) {
      setContactResponse({
        url: null,
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

