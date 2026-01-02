import { Phone, MessageCircle, Signal, Zap } from "lucide-react";

const HeroSection = () => {
  const phoneNumber = "9876543210";
  const whatsappNumber = "919876543210";

  return (
    <section className="pt-20 pb-12 px-4 bg-gradient-to-b from-accent to-background">
      <div className="container-tight text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cta-green/10 text-cta-green text-sm font-medium mb-6">
          <Signal className="w-4 h-4" />
          <span>Serving 500+ Happy Customers</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 text-balance">
          Fast & Reliable Wi-Fi for Your Home & Office
        </h1>

        {/* Sub-headline */}
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto text-balance">
          Unlimited high-speed internet with 24/7 local support. No hidden charges, no contracts.
        </p>

        {/* Speed Highlight */}
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card border shadow-sm mb-8">
          <Zap className="w-5 h-5 text-cta-orange" />
          <span className="text-base font-semibold text-foreground">Plans starting at ₹499/month</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
          <a
            href={`tel:+91${phoneNumber}`}
            className="btn-call w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi, I want to know about your internet plans`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>

        {/* Trust line */}
        <p className="text-sm text-muted-foreground mt-6">
          ✓ Free Installation &nbsp; ✓ No Hidden Charges &nbsp; ✓ Same-day Activation
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
