import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, CalendarCheck, Rocket } from "lucide-react";

export function LandingHowItWorks() {
    const steps = [
        {
            icon: BrainCircuit,
            title: "1. Training",
            description: "We train LeadIA with your POP, agenda, and your unique communication style."
        },
        {
            icon: CalendarCheck,
            title: "2. Testing",
            description: "You test LeadIA for 14 days with your own patients to ensure it meets your standards."
        },
        {
            icon: Rocket,
            title: "3. Activation",
            description: "We activate it full-time. No installation, no complex configuration, no system change."
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4">How It Works</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Simple, Seamless Integration
                    </h2>
                    <p className="text-lg text-slate-600">
                        Get started without disrupting your current workflow.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <Card key={index} className="border-slate-200 bg-white shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#130157]"></div>
                            <CardContent className="p-8 flex flex-col items-center text-center h-full">
                                <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mb-6 text-[#130157]">
                                    <step.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
