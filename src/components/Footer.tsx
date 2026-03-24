import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-background">Pétale</h3>
            <p className="font-body text-sm font-light leading-relaxed">
              Artisan floristry for life's most beautiful moments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-background transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-background transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-background transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {[
            { title: "Shop", links: ["All Flowers", "Bouquets", "Plants", "Dried Flowers", "Gift Sets"] },
            { title: "Help", links: ["Delivery Info", "Returns", "FAQs", "Care Guide"] },
            { title: "Company", links: ["About Us", "Careers", "Sustainability", "Press"] },
          ].map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="font-body text-xs tracking-[0.2em] uppercase text-background">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-sm font-light hover:text-background transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="font-body text-xs tracking-wide">
            © 2026 Pétale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
