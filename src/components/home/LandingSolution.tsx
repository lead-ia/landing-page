import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

export function LandingSolution() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4">The Solution</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        LeadIA Takes Care of Patients <br />
                        <span className="text-primary">While You Focus on Care</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        LeadIA does everything a secretary should do, but faster, cheaper, and without ever taking a break.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Traditional Secretary */}
                    <Card className="md:col-span-1 border-slate-200 bg-white">
                        <CardHeader>
                            <CardTitle className="text-slate-500">Traditional Secretary</CardTitle>
                            <CardDescription>Human limitations</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-slate-500">
                                    <XCircle className="h-5 w-5 text-red-400" />
                                    <span>Available 8 hours/day</span>
                                </li>
                                <li className="flex items-center gap-2 text-slate-500">
                                    <XCircle className="h-5 w-5 text-red-400" />
                                    <span>Replies in minutes/hours</span>
                                </li>
                                <li className="flex items-center gap-2 text-slate-500">
                                    <XCircle className="h-5 w-5 text-red-400" />
                                    <span>Can miss calls/messages</span>
                                </li>
                                <li className="flex items-center gap-2 text-slate-500">
                                    <XCircle className="h-5 w-5 text-red-400" />
                                    <span>High monthly salary</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* LeadIA */}
                    <Card className="md:col-span-2 border-primary/20 bg-primary/5 relative overflow-hidden ring-2 ring-primary shadow-xl">
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                            RECOMMENDED
                        </div>
                        <CardHeader>
                            <CardTitle className="text-primary text-2xl">LeadIA Smart Secretary</CardTitle>
                            <CardDescription className="text-primary/80">AI-powered perfection</CardDescription>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-800">
                                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                                    <span className="font-medium">Available 24/7/365</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-800">
                                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                                    <span className="font-medium">Replies in &lt; 5 seconds</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-800">
                                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                                    <span className="font-medium">Never misses a patient</span>
                                </li>
                            </ul>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-800">
                                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                                    <span className="font-medium">Follows your POP & tone</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-800">
                                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                                    <span className="font-medium">Fraction of the cost</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-800">
                                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                                    <span className="font-medium">WhatsApp Integrated</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
