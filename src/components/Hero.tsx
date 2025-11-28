import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="mx-auto container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 px-8 lg:px-0">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-4xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#130157]  to-[#12f6bb] text-transparent bg-clip-text">
              LeadIA
            </span>{" "}
            Your Clinic’s
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#12f6bb] to-[#130157] text-transparent bg-clip-text">
              AI-Powered
            </span>{" "}
            Appointment Manager
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Automate scheduling, reduce no-shows, and give patients a seamless booking experience
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
