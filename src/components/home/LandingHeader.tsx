import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function LandingHeader() {
    const navigate = useNavigate();

    const handleCtaClick = () => {
        navigate("/contact");
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="/logo/leadia-logo.png" alt="LeadIA Logo" className="h-8 w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                    <span className="text-xl font-bold text-slate-900 hidden">LeadIA</span>
                </div>
                <Button onClick={handleCtaClick}>
                    Get Started
                </Button>
            </div>
        </header>
    );
}
