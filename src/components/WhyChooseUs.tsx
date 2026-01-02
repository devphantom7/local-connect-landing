import { Gauge, MapPin, Clock, PhoneOff } from "lucide-react";

const benefits = [
  {
    icon: Gauge,
    title: "Stable Speed, Always",
    description: "Consistent speeds even during peak hours. No throttling, no slowdowns.",
  },
  {
    icon: MapPin,
    title: "Local Technicians",
    description: "Our team lives in your area. Quick response, familiar faces.",
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description: "Get connected within 24-48 hours of booking. Same-day available.",
  },
  {
    icon: PhoneOff,
    title: "No Call Center Hassle",
    description: "Talk directly to our local team. No waiting, no transfers.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Why Choose FastNet?
          </h2>
          <p className="text-muted-foreground">
            We're not a big company. We're your neighbors.
          </p>
        </div>

        {/* Benefits List */}
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl bg-card border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
