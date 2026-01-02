import { Check, Star, Phone } from "lucide-react";

const plans = [
  {
    name: "Basic",
    speed: "40 Mbps",
    price: "499",
    idealFor: "Single user / Light browsing",
    features: ["Unlimited Data", "Free Router", "Email Support"],
    featured: false,
  },
  {
    name: "Standard",
    speed: "100 Mbps",
    price: "699",
    idealFor: "Family / HD Streaming",
    features: ["Unlimited Data", "Free Dual-Band Router", "Priority Support", "Free Installation"],
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Premium",
    speed: "200 Mbps",
    price: "999",
    idealFor: "Office / Gaming / 4K Streaming",
    features: ["Unlimited Data", "Premium Router", "24/7 Priority Support", "Free Installation", "Static IP Available"],
    featured: false,
  },
];

const PricingPlans = () => {
  const phoneNumber = "9876543210";

  return (
    <section className="section-padding bg-secondary/50" id="plans">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Simple, Honest Pricing
          </h2>
          <p className="text-muted-foreground">
            Choose a plan that fits your needs. No contracts, cancel anytime.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={plan.featured ? "plan-card-featured" : "plan-card"}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-cta-green text-white text-xs font-semibold px-3 py-1 rounded-bl-xl rounded-tr-xl flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mt-2">
                  ₹{plan.price}
                  <span className="text-base font-normal text-muted-foreground">/month</span>
                </div>
                <div className="text-cta-green font-semibold mt-1">{plan.speed}</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Ideal for: {plan.idealFor}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-cta-green flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`tel:+91${phoneNumber}`}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${
                  plan.featured
                    ? "bg-cta-green text-white hover:bg-cta-green-hover"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                <Phone className="w-4 h-4" />
                Get This Plan
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          *GST extra. Installation free for 6+ month plans. Terms apply.
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;
