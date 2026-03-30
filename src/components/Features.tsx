import { Description } from "@radix-ui/react-toast";
import { Truck, Leaf, Heart, Clock } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description: "Order before 2pm for same-day delivery across the city.",
  },
  {
    icon: Leaf,
    title: "Sourcing Flowers",
    description: "Partnering with local farms that practice eco-friendly growing to supply fresh cut flowers to our esteemed clients.",
  },
  {
    icon: Heart,
    title: "Handcrafted with Love",
    description: "Each arrangement is uniquely designed by our artisan florists.",
  },
  {
      icon: Clock,
      title: "Freshness Guaranteed",
      description: "We guarantee the freshness of our flowers."
   
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground font-body font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
