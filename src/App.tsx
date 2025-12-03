import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactForm } from "./components/ContactForm";
import { StartChat } from "./components/StartChat";
import { ContactRepositoryProvider } from "./context/ContactRepositoryContext";
import { LeadIALanding } from "./components/home/LeadIALanding";
import { LanguageProvider } from "./context/LanguageContext";

function AppRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LeadIALanding />} />
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
      <Router>
        <AppRoutes />
      </Router>
    </LanguageProvider>
  );
}

export default App;
