import { createContext, useContext } from "react";
import { contactRepository, type ContactRepository } from "../repository/contact-repository";

const ContactRepoContext = createContext<ContactRepository | null>(null);

export function ContactRepositoryProvider({ children }: { children: React.ReactNode }) {
  return (
    <ContactRepoContext.Provider value={contactRepository} >
      {children}
    </ContactRepoContext.Provider>
  );
}

export function useContactRepositoryProvider() {
  const repo = useContext(ContactRepoContext);
  if (!repo) {
    throw new Error("useContactRepository must be used inside <ContactRepositoryProvider>");
  }
  return repo;
}
