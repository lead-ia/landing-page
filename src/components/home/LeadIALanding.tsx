import { LandingHeader } from "./LandingHeader";
import { LandingHero } from "./LandingHero";
import { LandingProblem } from "./LandingProblem";
import { LandingSolution } from "./LandingSolution";
import { LandingHowItWorks } from "./LandingHowItWorks";
import { LandingTestimonials } from "./LandingTestimonials";
import { LandingOffer } from "./LandingOffer";
import { LandingCTA } from "./LandingCTA";
import { LandingFooter } from "./LandingFooter";

export function LeadIALanding() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <LandingHeader />
            <LandingHero />
            <LandingProblem />
            <LandingSolution />
            {/* <LandingScope /> */}
            <LandingHowItWorks />
            <LandingTestimonials />
            <LandingOffer />
            <LandingCTA />
            <LandingFooter />
        </div>
    );
}
