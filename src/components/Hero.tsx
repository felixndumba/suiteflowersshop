import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBouquet from "@/assets/hero-bouquet.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBouquet}
          alt="Luxury floral bouquet with roses and peonies"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-xl space-y-8 animate-fade-up">
          <p className="text-sm font-body tracking-[0.3em] uppercase text-blush">
            Artisan Floristry
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.1] text-primary-foreground">
            Where Every
            <br />
            <em className="italic">Petal</em> Tells
            <br />a Story
          </h1>
          <p className="text-lg font-body font-light text-primary-foreground/80 max-w-md leading-relaxed">
            Hand-crafted arrangements for life's most beautiful moments.
            Sustainably sourced, artfully designed.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button size="lg" className="rounded-none px-8 tracking-wider uppercase text-xs font-body h-12">
              Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-none px-8 tracking-wider uppercase text-xs font-body h-12 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
