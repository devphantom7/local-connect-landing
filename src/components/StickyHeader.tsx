import { Phone, MessageCircle, Wifi } from "lucide-react";

const StickyHeader = () => {
  const phoneNumber = "9876543210";
  const whatsappNumber = "919876543210";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container-tight flex items-center justify-between h-14 px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Wifi className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg text-foreground">FastNet WiFi</span>
        </a>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:+91${phoneNumber}`}
            className="w-10 h-10 rounded-full bg-cta-green flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            aria-label="Call us"
          >
            <Phone className="w-5 h-5 text-white" />
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in your internet plans`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            aria-label="WhatsApp us"
          >
            <MessageCircle className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
