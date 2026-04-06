import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { deliveryZones } from "../data/delivery";
import { MapPin, Clock, Truck, Info } from "lucide-react";

const Delivery = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h1 className="font-display text-4xl md:text-5xl text-foreground">Delivery Information</h1>
              <p className="font-body text-muted-foreground font-light max-w-2xl mx-auto">
                We deliver across Nairobi and nearby towns. Check our zones below to find your area and estimated delivery time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {deliveryZones.map((zone) => (
                <div key={zone.id} className="border border-border p-8 space-y-4 hover:border-primary/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl text-foreground">{zone.name}</h3>
                    <span className="font-display text-lg text-primary">KES {zone.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <Clock className="h-4 w-4 shrink-0" />
                    <span>{zone.eta}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
                    <p className="text-sm text-muted-foreground font-body font-light">
                      {zone.areas.join(" · ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ-style notes */}
            <div className="border-t border-border pt-12 space-y-8">
              <h2 className="font-display text-2xl text-foreground text-center">Good to Know</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Truck, title: "Same-Day Orders", text: "Place your order before 2 PM for same-day delivery within CBD & Inner Suburbs." },
                  { icon: Info, title: "Custom Locations", text: "Don't see your area? Contact us via WhatsApp and we'll arrange a custom delivery quote." },
                  { icon: Clock, title: "Weekend & Holidays", text: "We deliver 7 days a week including public holidays. Peak-day orders are best placed a day early." },
                ].map((item: { icon: any; title: string; text: string }) => (
                  <div key={item.title} className="text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-display text-lg text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground font-body font-light leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Delivery;
