import { Instagram, Facebook, Twitter } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-background">Suite flowers & Gifts</h3>
            <p className="font-body text-sm font-light leading-relaxed">
              Artisan floristry for life's most beautiful moments.
            </p>
            <p className="font-display text-2xl text-background">Our socials</p>
            <div className="flex gap-4">
              
              <a href="https://www.instagram.com/suiteflowersandgifts/" className="hover:text-background transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-background transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              
             
              <a
  href="https://www.tiktok.com/@suiteflowersandgifts?lang=en"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-background transition-colors"
  aria-label="TikTok"
>
  <FaTiktok className="h-5 w-5" />
</a>
            </div>
          </div>

          {[
            { title: "Shop", links: ["All Flowers", "Bouquets", "Gifts" ] },
            { title: "Company", links: ["About Us","Delivery Info"] },
          ].map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="font-body text-xs tracking-[0.2em] uppercase text-background">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
<a href={link === "Delivery Info" ? "/delivery" : "#"} className="font-body text-sm font-light hover:text-background transition-colors">
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
            © 2026 Suite flowers and giftss . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
