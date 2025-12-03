import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ContactForm } from "./components/ContactForm";
import { StartChat } from "./components/StartChat";
import { ContactRepositoryProvider } from "./context/ContactRepositoryContext";
import { LeadIALanding } from "./components/home/LeadIALanding";
import { LanguageProvider } from "./context/LanguageContext";
import { ReferralProvider, useReferral } from "./context/ReferralContext";

function AppRoutes() {
  const location = useLocation();
  const { setIsReferral } = useReferral();

  useEffect(() => {
    if (location.pathname === "/tonton") {
      setIsReferral(true);
    }
  }, [location, setIsReferral]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LeadIALanding />} />
        <Route path="/tonton" element={<LeadIALanding />} />
        <Route
          path="/contact"
          element={
            <ContactRepositoryProvider>
              <ContactForm />
            </ContactRepositoryProvider>
          }
        />
        <Route path="/start-chat" element={<StartChat />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <ReferralProvider>
        <Router>
          <AppRoutes />
        </Router>
      </ReferralProvider>
    </LanguageProvider>
  );
}

export default App;
