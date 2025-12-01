import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function LandingTestimonials() {
    const testimonials = [
        {
            name: "Dr. Sarah Chen",
            specialty: "Endocrinologist",
            text: "LeadIA has completely transformed my practice. My patients love the instant responses, and I love that I don't have to worry about missed appointments anymore. It captures the nuance of my instructions perfectly.",
            rating: 5
        },
        {
            name: "Dr. James Wilson",
            specialty: "Psychiatrist",
            text: "Empathy is crucial in my field. I was skeptical at first, but LeadIA's tone is incredibly human and supportive. It handles the initial triage with such care that my patients feel heard immediately.",
            rating: 5
        },
        {
            name: "Dr. Maria Rodriguez",
            specialty: "Cardiologist",
            text: "The efficiency is unmatched. It handles scheduling, reminders, and basic questions so my staff can focus on in-clinic patient care. The Google Calendar integration is flawless.",
            rating: 5
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4">Testimonials</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Trusted by Specialists
                    </h2>
                    <p className="text-lg text-slate-600">
                        See what your colleagues are saying about LeadIA.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <Card key={index} className="border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-8">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <Quote className="h-8 w-8 text-slate-200 mb-4" />
                                <p className="text-slate-700 mb-6 italic">
                                    "{t.text}"
                                </p>
                                <div>
                                    <p className="font-bold text-slate-900">{t.name}</p>
                                    <p className="text-sm text-slate-500">{t.specialty}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
