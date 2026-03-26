import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, updateQty, remove, total } = useCart();
  const shipping = items.length > 0 ? 15 : 0;
  const grandTotal = total + shipping;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-12">Your Cart</h1>

            {items.length === 0 ? (
              <div className="text-center py-20 space-y-6">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto" />
                <p className="font-display text-2xl text-foreground">Your cart is empty</p>
                <p className="text-muted-foreground font-body font-light">Discover our beautiful arrangements and add something special.</p>
                <Link to="/collections">
                  <Button variant="outline" size="lg" className="rounded-none px-10 tracking-wider uppercase text-xs font-body h-12">
                    Browse Collections
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-0">
                  {items.map((item, idx) => (
                    <div key={`${item.id}-${item.size}`}>
                      <div className="flex gap-6 py-8">
                        <img src={item.image} alt={item.name} className="w-24 h-28 object-cover shrink-0" />
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-display text-lg text-foreground">{item.name}</h3>
                              <p className="text-sm text-muted-foreground font-body">{item.priceLabel} · {item.size}</p>
                            </div>
                            <button onClick={() => remove(item.id, item.size)} className="text-muted-foreground hover:text-destructive transition-colors">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <button onClick={() => updateQty(item.id, item.size, -1)} className="w-8 h-8 border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="font-body text-sm w-6 text-center">{item.quantity}</span>
                            <button onClick={() => updateQty(item.id, item.size, 1)} className="w-8 h-8 border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                      {idx < items.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>

                <div className="bg-secondary/50 p-8 h-fit space-y-6">
                  <h3 className="font-display text-xl text-foreground">Order Summary</h3>
                  <div className="space-y-3 font-body text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>${total}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span>${shipping}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-foreground font-semibold text-base">
                      <span>Total</span>
                      <span>${grandTotal}</span>
                    </div>
                  </div>
                  <Button size="lg" className="rounded-none w-full tracking-wider uppercase text-xs font-body h-12">
                    Checkout
                  </Button>
                  <Link to="/collections" className="block text-center">
                    <span className="text-xs font-body tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
                      Continue Shopping
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
