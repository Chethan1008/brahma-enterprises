
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Using actual business phone number
    window.open("https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20services", "_blank");
  };

  return (
    <Button 
      onClick={handleWhatsAppClick}
      className="fixed left-4 bottom-4 z-50 rounded-full bg-green-500 hover:bg-green-600 shadow-lg p-3 transition-transform hover:scale-110"
      size="icon"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
