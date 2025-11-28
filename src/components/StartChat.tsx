import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StartChat = () => {
  const handleWhatsAppClick = () => {
    // This is a placeholder number - in a real app, you might want to use a specific number
    // or maybe get it from props/state depending on your use case
    const phoneNumber = "1234567890"; // Replace with actual business number
    const message = "Hello, I'm interested in your services!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Ready to Chat?</CardTitle>
          <CardDescription>Connect with us directly on WhatsApp for immediate assistance</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6">
          <div className="bg-green-100 p-4 rounded-full">
            <MessageCircle className="h-12 w-12 text-green-600" />
          </div>

          <p className="text-center text-muted-foreground">
            Click the button below to start chatting with us on WhatsApp
          </p>

          <Button onClick={handleWhatsAppClick} className="w-full max-w-xs flex items-center">
            <MessageCircle className="mr-2 h-4 w-4" />
            Start Chat on WhatsApp
          </Button>

          <div className="pt-4 text-center w-full">
            <Button variant="outline" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
