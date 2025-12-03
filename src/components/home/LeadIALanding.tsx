import { LandingHeader } from "./LandingHeader";
import { LandingHero } from "./LandingHero";
import { LandingProblem } from "./LandingProblem";
import { LandingSolution } from "./LandingSolution";
import { LandingTargetAudience } from "./LandingTargetAudience";
import { LandingHowItWorks } from "./LandingHowItWorks";
import { LandingTestimonials } from "./LandingTestimonials";
import { LandingOffer } from "./LandingOffer";
import { LandingCTA } from "./LandingCTA";
import { LandingFooter } from "./LandingFooter";

export function LeadIALanding() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <LandingHeader />
      <LandingHero />
      <LandingProblem />
      <LandingSolution />
      <LandingTargetAudience />
      {/* <LandingScope /> */}
      <LandingHowItWorks />
      <LandingTestimonials />
      <LandingOffer />
      <LandingCTA />
      <LandingFooter />
    </div>
  );
}
