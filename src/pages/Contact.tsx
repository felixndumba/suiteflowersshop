import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  const info = [
    { icon: MapPin, label: "Visit Us", value: "42 Bloom Lane, Paris, France" },
    { icon: Phone, label: "Call Us", value: "+33 1 23 45 67 89" },
    { icon: Mail, label: "Email Us", value: "hello@petale.com" },
    { icon: Clock, label: "Hours", value: "Mon–Sat: 9am – 7pm" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-4">
            <p className="text-sm font-body tracking-[0.3em] uppercase text-primary">Get in Touch</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground">Contact Us</h1>
            <p className="text-muted-foreground font-body font-light max-w-lg mx-auto">
              Have a question, custom order, or just want to say hello? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Info */}
              <div className="space-y-10">
                <h2 className="font-display text-3xl text-foreground">We're Here for You</h2>
                <div className="space-y-8">
                  {info.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">{item.label}</p>
                        <p className="font-body text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">Name</Label>
                    <Input id="name" required placeholder="Your name" className="rounded-none border-border h-12 font-body" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">Email</Label>
                    <Input id="email" type="email" required placeholder="your@email.com" className="rounded-none border-border h-12 font-body" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">Subject</Label>
                  <Input id="subject" required placeholder="What's this about?" className="rounded-none border-border h-12 font-body" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">Message</Label>
                  <Textarea id="message" required placeholder="Tell us more…" rows={6} className="rounded-none border-border font-body resize-none" />
                </div>
                <Button type="submit" disabled={loading} size="lg" className="rounded-none px-10 tracking-wider uppercase text-xs font-body h-12 w-full sm:w-auto">
                  {loading ? "Sending…" : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
