import { Wifi, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-10 px-4">
      <div className="container-tight">
        {/* Logo & Tagline */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <Wifi className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl">FastNet WiFi</span>
          </div>
          <p className="text-sm text-primary-foreground/70">
            Your Trusted Local Internet Provider
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-3 mb-8 text-sm">
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:underline">
            <Phone className="w-4 h-4" />
            +91 98765 43210
          </a>
          <a href="mailto:support@fastnetwifi.in" className="flex items-center gap-2 hover:underline">
            <Mail className="w-4 h-4" />
            support@fastnetwifi.in
          </a>
          <div className="flex items-center gap-2 text-primary-foreground/70">
            <MapPin className="w-4 h-4" />
            Mumbai Western Suburbs
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
          <a href="#plans" className="hover:underline">Plans</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <span className="text-primary-foreground/50">|</span>
          <a href="#" className="text-primary-foreground/70 hover:underline">Privacy Policy</a>
          <a href="#" className="text-primary-foreground/70 hover:underline">Terms</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-primary-foreground/50">
          © {currentYear} FastNet WiFi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
