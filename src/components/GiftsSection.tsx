import { Link } from "react-router-dom";
import { Gift, Heart, Cake, Baby, GraduationCap, PartyPopper } from "lucide-react";

const giftCategories = [
  { name: "Romance", icon: Heart, description: "For your special someone", href: "/gifts?category=romance" },
  { name: "Birthday", icon: Cake, description: "Make their day unforgettable", href: "/gifts?category=birthday" },
  //{ name: "New Baby", icon: Baby, description: "Welcome the little one", href: "/gifts?category=new-baby" },
  { name: "Graduation", icon: GraduationCap, description: "Celebrate their achievement", href: "/gifts?category=graduation" },
  { name: "Celebration", icon: PartyPopper, description: "For every joyful moment", href: "/gifts?category=celebration" },
  { name: "Gift Sets", icon: Gift, description: "Curated bundles of joy", href: "/gifts?category=gift-sets" },
];

const GiftsSection = () => {
  return (
    <section id="gifts" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-body tracking-[0.3em] uppercase text-primary">
            Perfect Presents
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Gifts for Every Occasion
          </h2>
          <p className="text-muted-foreground font-body font-light max-w-md mx-auto">
            Thoughtfully curated gift collections to brighten someone's day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {giftCategories.map((cat) => (
            <Link key={cat.name} to={cat.href}>
              <div className="group border border-border p-8 text-center space-y-4 hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer">
                <cat.icon className="h-8 w-8 mx-auto text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl text-foreground">{cat.name}</h3>
                <p className="text-sm font-body text-muted-foreground">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gifts">
            <button className="rounded-none px-10 tracking-wider uppercase text-xs font-body h-12 border border-border hover:border-primary hover:bg-primary/5 transition-colors">
              Browse All Gifts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GiftsSection;
