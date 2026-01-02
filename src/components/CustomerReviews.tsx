import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Sharma",
    location: "Andheri West",
    review: "Been using FastNet for 8 months now. Speed is consistent even in the evening. Their technician Ramesh is very helpful and comes quickly whenever there's an issue.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    location: "Goregaon East",
    review: "Switched from a big company to FastNet. The difference is night and day. Actual humans pick up the phone here, and they actually solve problems instead of reading scripts.",
    rating: 5,
  },
  {
    name: "Mohammed Ansari",
    location: "Malad West",
    review: "Running my small business from home. The connection is stable for video calls and uploading. Very happy with the service. Price is also fair for what you get.",
    rating: 5,
  },
];

const CustomerReviews = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground">
            Real reviews from real customers in your area
          </p>
        </div>

        {/* Reviews */}
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-card border"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent-foreground/20 mb-3" />
              
              {/* Review Text */}
              <p className="text-foreground mb-4 leading-relaxed">
                "{review.review}"
              </p>

              {/* Author & Rating */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-cta-orange text-cta-orange"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-sm">
            <Star className="w-4 h-4 fill-cta-orange text-cta-orange" />
            <span className="text-foreground font-medium">4.8/5 average rating from 500+ customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
