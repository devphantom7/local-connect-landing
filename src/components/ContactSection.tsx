import { Phone, MessageCircle, Clock, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const phoneNumber = "9876543210";
  const whatsappNumber = "919876543210";
  
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-secondary/50" id="contact">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Get Connected Today
          </h2>
          <p className="text-muted-foreground">
            Call us or fill the form. We'll reach you within 30 minutes.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          {/* Phone Card */}
          <a
            href={`tel:+91${phoneNumber}`}
            className="flex items-center gap-4 p-5 rounded-xl bg-card border hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-cta-green flex items-center justify-center flex-shrink-0">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Call Us Directly</p>
              <p className="text-xl font-bold text-foreground">+91 {phoneNumber}</p>
              <p className="text-xs text-cta-green font-medium">Tap to call now</p>
            </div>
          </a>

          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in FastNet WiFi plans`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-xl bg-card border hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">WhatsApp Us</p>
              <p className="text-xl font-bold text-foreground">+91 {phoneNumber}</p>
              <p className="text-xs text-[#25D366] font-medium">Tap to chat now</p>
            </div>
          </a>
        </div>

        {/* Business Info */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 text-sm">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Mon-Sat: 9am - 9pm | Sun: 10am - 6pm</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Shop 12, Om Complex, Andheri West, Mumbai</span>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="max-w-md mx-auto p-6 rounded-2xl bg-card border shadow-md">
          <h3 className="font-semibold text-lg text-foreground mb-4 text-center">
            Request a Callback
          </h3>
          
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cta-green/10 flex items-center justify-center">
                <Phone className="w-8 h-8 text-cta-green" />
              </div>
              <p className="font-semibold text-foreground mb-1">Thank you!</p>
              <p className="text-sm text-muted-foreground">
                We'll call you within 30 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="10-digit mobile number"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold bg-cta-green text-white hover:bg-cta-green-hover transition-colors"
              >
                <Send className="w-5 h-5" />
                Request Callback
              </button>
              <p className="text-xs text-center text-muted-foreground">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
