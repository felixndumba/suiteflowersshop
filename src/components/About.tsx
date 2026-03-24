import { Button } from "@/components/ui/button";
import productDried from "@/assets/product-dried.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={productDried}
                alt="Our floral studio"
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 hidden lg:block">
              <p className="font-display text-4xl">12+</p>
              <p className="font-body text-xs tracking-[0.2em] uppercase mt-1">Years of Craft</p>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-sm font-body tracking-[0.3em] uppercase text-primary">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
              Rooted in Passion,
              <br />
              <em className="italic">Blooming</em> with Purpose
            </h2>
            <p className="text-muted-foreground font-body font-light leading-relaxed text-lg">
              Founded in a small garden studio, Pétale has grown into a beloved destination 
              for those who appreciate the art of floristry. We believe every arrangement 
              should capture emotion—whether it's the joy of celebration, the comfort 
              of remembrance, or the simple beauty of an ordinary day.
            </p>
            <p className="text-muted-foreground font-body font-light leading-relaxed">
              Our team of master florists works with seasonal, locally-sourced blooms 
              to create designs that are as sustainable as they are stunning.
            </p>
            <Button
              variant="outline"
              className="rounded-none px-8 tracking-wider uppercase text-xs font-body h-12"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
