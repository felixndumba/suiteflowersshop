import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center space-y-8">
        <p className="text-xs font-body tracking-[0.3em] uppercase opacity-70">
          Stay in Bloom
        </p>
        <h2 className="font-display text-3xl md:text-4xl">
          Join Our Garden Club
        </h2>
        <p className="font-body font-light opacity-80 max-w-md mx-auto">
          Get exclusive access to seasonal collections, styling tips, and 10% off your first order.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            className="rounded-none h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body"
          />
          <Button
            variant="secondary"
            className="rounded-none h-12 px-8 tracking-wider uppercase text-xs font-body"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
