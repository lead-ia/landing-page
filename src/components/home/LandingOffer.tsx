import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Sparkles, Clock, ShieldCheck, UserPlus } from "lucide-react";

export function LandingOffer() {
    const benefits = [
        { icon: Sparkles, text: "Prior access to LeadIA" },
        { icon: Check, text: "30% OFF in the first 3 months" },
        { icon: UserPlus, text: "Premium and personalized onboarding" },
        { icon: ShieldCheck, text: "Priority support for the next 90 days" },
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Card className="border-2 border-[#130157]/10 overflow-hidden relative shadow-2xl bg-white p-0">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-[#130157]"></div>
                        <div className="grid md:grid-cols-2">
                            <div className="p-8 md:p-12 bg-[#130157] text-white flex flex-col justify-center">
                                <Badge className="w-fit mb-6 bg-primary text-primary-foreground hover:bg-primary/90 border-none">
                                    Exclusive Pre-launch Offer
                                </Badge>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Join the Waiting List
                                </h2>
                                <p className="text-blue-100 mb-8 text-lg">
                                    Secure your spot today and unlock exclusive benefits for early adopters.
                                </p>
                                <div className="flex items-center gap-3 text-sm bg-white/10 p-4 rounded-lg border border-white/10">
                                    <Clock className="h-5 w-5 text-primary shrink-0" />
                                    <p>
                                        <span className="font-semibold text-white">Limited Seats:</span> We have limited capacity for this pre-launch phase.
                                    </p>
                                </div>
                            </div>

                            <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">What you'll get:</h3>
                                <ul className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                                <benefit.icon className="h-4 w-4" />
                                            </div>
                                            <span className="text-slate-700 font-medium">{benefit.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
