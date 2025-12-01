import { Badge } from "@/components/ui/badge";
import { Clock, XCircle, UserCheck } from "lucide-react";

export function LandingProblem() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-red-100 rounded-full blur-2xl opacity-50"></div>
                            <div className="relative rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] bg-slate-300 text-center border border-slate-200 overflow-none">
                                {/* <div className="h-20 w-20 bg-red-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                                    <XCircle className="h-10 w-10 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">No Response...</h3>
                                <p className="text-slate-500 max-w-xs">
                                    Patients are waiting. <br />
                                    Don't let them find another doctor.
                                </p> */}
                                <img src="/frust.webp" className="object-cover w-full h-full rounded-2xl" />
                            </div>
                            <div className="absolute bottom-6 left-6 right-6 bg-white/30 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50">
                                <div className="flex items-start gap-3">
                                    <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-slate-100">Missed Opportunity</p>
                                        <p className="text-sm text-slate-200">"I tried to book but got no reply. Found another doctor."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <Badge variant="outline" className="mb-4 border-red-200 text-red-600 bg-red-50">The Problem</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            You're Losing Patients <br />
                            <span className="text-red-500">While You Sleep</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Did you know that <span className="font-semibold text-slate-900">more than 50%</span> of patients try to book appointments outside of commercial hours?
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 text-lg">The 10-Minute Rule</h3>
                                    <p className="text-slate-600">If you take more than 10 minutes to reply, patients start looking for another doctor. Speed is critical.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                                    <UserCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 text-lg">Overwhelmed Staff</h3>
                                    <p className="text-slate-600">Your current staff can't be available 24/7 without significant cost and burnout.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 text-sm text-slate-500 italic">
                            Source: Doctoralia, Salesforce Health
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
