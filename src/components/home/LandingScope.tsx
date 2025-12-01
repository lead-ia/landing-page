import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ShieldAlert, Calendar, Heart, MessageSquare, ShieldCheck, FileX, LayoutPanelTop, Workflow, CalendarClock, BrainCircuit, CalendarCheck2 } from "lucide-react";

export function LandingScope() {
    const capabilities = [
        { icon: Heart, text: "Humanized & Empathetic Triage" },
        { icon: BrainCircuit, text: "Context-Aware Conversations" },
        { icon: LayoutPanelTop, text: "Structured Initial Screening" },
        { icon: Calendar, text: "In-person & Online Scheduling" },
        { icon: Workflow, text: "Automated Confirmations" },
        { icon: CalendarClock, text: "Appointment Reminders" },
        { icon: MessageSquare, text: "Post-Appointment Follow-up" },
        { icon: CalendarCheck2, text: "Google Calendar Integration" },
    ];

    const limitations = [
        { text: "Medical Diagnostics" },
        { text: "Prescription Recommendations" },
        { text: "Exam Analysis" },
        { text: "Clinical Opinions" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4">Scope of Service</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Complete Administrative Support <br />
                        <span className="text-[#130157]">With Strict Safety Boundaries</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        LeadIA handles all secretary duties with empathy and efficiency, while strictly adhering to non-clinical boundaries.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* What LeadIA Does */}
                    <Card className="border-green-100 bg-green-50/30">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <Check className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl text-slate-900">What LeadIA Does</CardTitle>
                            </div>
                            <p className="text-slate-600 text-sm">Comprehensive administrative automation</p>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid gap-4">
                                {capabilities.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <item.icon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                        <span className="text-slate-700 font-medium">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* What LeadIA Does NOT Do */}
                    <Card className="border-slate-200 bg-slate-50">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                                    <ShieldAlert className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl text-slate-900">Safety Boundaries</CardTitle>
                            </div>
                            <p className="text-slate-600 text-sm">LeadIA never performs clinical tasks</p>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-6 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <div className="flex items-center gap-2 text-slate-800 font-semibold mb-2">
                                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                                    <span>100% Safe & Administrative</span>
                                </div>
                                <p className="text-sm text-slate-600">
                                    LeadIA is restricted to secretary behaviors only. It does not replace medical judgment.
                                </p>
                            </div>
                            <ul className="space-y-4">
                                {limitations.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 opacity-75">
                                        <FileX className="h-5 w-5 text-slate-400 shrink-0" />
                                        <span className="text-slate-600 line-through decoration-slate-400">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
