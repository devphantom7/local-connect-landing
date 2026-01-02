import { Headphones, BadgeCheck, Wrench, Users } from "lucide-react";

const trustItems = [
  {
    icon: Headphones,
    title: "24/7 Local Support",
    description: "Call us anytime, we're always here",
  },
  {
    icon: BadgeCheck,
    title: "No Hidden Charges",
    description: "What you see is what you pay",
  },
  {
    icon: Wrench,
    title: "Free Installation",
    description: "Complete setup at no extra cost",
  },
  {
    icon: Users,
    title: "500+ Customers",
    description: "Trusted by families & businesses",
  },
];

const TrustSignals = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-card text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm md:text-base text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
