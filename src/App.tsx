import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Toaster } from "@/components/ui/sonner";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { ContactForm } from "./components/ContactForm";
import { StartChat } from "./components/StartChat";
import { ContactRepositoryProvider } from "./context/ContactRepositoryContext";
import ViewsContainer from "./components/ViewsContainer/ViewsContainer";
import { LeadIALanding } from "./components/home/LeadIALanding";
import { LanguageProvider } from "./context/LanguageContext";

function AppRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Sponsors />
              <About />
              <HowItWorks />
              <Features />
              <Services />
              <Cta />
              <Testimonials />
              <Team />
              <Pricing />
              <Newsletter />
              <FAQ />
              <Footer />
              <ScrollToTop />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <ContactRepositoryProvider>
              <ContactForm />
            </ContactRepositoryProvider>
          }
        />
        <Route path="/start-chat" element={<StartChat />} />
        <Route path="/landing" element={<LeadIALanding />} />
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
