import { createContext, useContext, useState, type ReactNode } from "react";

interface ReferralContextType {
  isReferral: boolean;
  setIsReferral: (isReferral: boolean) => void;
}

const ReferralContext = createContext<ReferralContextType | undefined>(
  undefined
);

export function ReferralProvider({ children }: { children: ReactNode }) {
  const [isReferral, setIsReferral] = useState<boolean>(false);

  return (
    <ReferralContext.Provider value={{ isReferral, setIsReferral }}>
      {children}
    </ReferralContext.Provider>
  );
}

export function useReferral() {
  const context = useContext(ReferralContext);
  if (context === undefined) {
    throw new Error("useReferral must be used within a ReferralProvider");
  }
  return context;
}
