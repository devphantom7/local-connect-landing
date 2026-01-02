import { MapPin, Phone, MessageCircle } from "lucide-react";

const areas = [
  "Andheri East & West",
  "Goregaon",
  "Malad",
  "Kandivali",
  "Borivali",
  "Dahisar",
  "Bandra",
  "Santacruz",
];

const ServiceArea = () => {
  const phoneNumber = "9876543210";
  const whatsappNumber = "919876543210";

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-4">
            <MapPin className="w-7 h-7" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Available in Your Area
          </h2>
          <p className="text-primary-foreground/80">
            Currently serving Mumbai Western Suburbs
          </p>
        </div>

        {/* Areas Grid */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {areas.map((area, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium"
            >
              {area}
            </span>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-48 rounded-xl bg-white/10 flex items-center justify-center mb-6 overflow-hidden">
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-2 opacity-60" />
            <p className="text-sm opacity-60">Service coverage map</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="mb-4 text-primary-foreground/90">
            Not sure if we cover your area? Call us to check!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
            <a
              href={`tel:+91${phoneNumber}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white text-primary hover:bg-white/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call to Check
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi, I want to check if you provide service in my area`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
