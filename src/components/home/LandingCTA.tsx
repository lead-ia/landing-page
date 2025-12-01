import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function LandingCTA() {
    const navigate = useNavigate();

    const handleCtaClick = () => {
        navigate("/contact");
    };

    return (
        <section className="py-20 bg-background text-primary-foreground">
            <div className="max-w-3xl mx-auto text-center p-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Your patients deserve a better experience, <br />
                    and you deserve your time back.
                </h2>
                <p className="text-xl text-background-foreground mb-10">
                    Join now our waiting list and have access to the prelaunching.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" onClick={handleCtaClick}>
                        Join Waiting List
                        <ArrowRight />
                    </Button>
                </div>
            </div>
            <div className="text-center">
                <p className="mt-8 text-primary-foreground/60 text-sm">
                    No credit card required for demo • Cancel anytime
                </p>
            </div>
        </section>
    );
}
