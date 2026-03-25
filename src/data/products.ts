import productBridal from "@/assets/product-bridal.jpg";
import productSpring from "@/assets/product-spring.jpg";
import productRomance from "@/assets/product-romance.jpg";
import productDried from "@/assets/product-dried.jpg";
import productSympathy from "@/assets/product-sympathy.jpg";
import productTropical from "@/assets/product-tropical.jpg";

export interface Product {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  image: string;
  tag: string;
  description: string;
  details: string[];
  sizes: { label: string; price: string }[];
}

export const products: Product[] = [
  {
    id: "bridal-bliss",
    name: "Bridal Bliss",
    price: "$120",
    priceNum: 120,
    image: productBridal,
    tag: "Wedding",
    description:
      "A breathtaking bridal arrangement featuring cascading white roses, delicate peonies, and lush greenery. Perfect for your most special day, this bouquet embodies timeless elegance and romance.",
    details: [
      "Hand-tied by our master florists",
      "Premium white roses & peonies",
      "Includes satin ribbon wrap",
      "Lasts 7–10 days with care",
    ],
    sizes: [
      { label: "Standard", price: "$120" },
      { label: "Deluxe", price: "$180" },
      { label: "Grand", price: "$250" },
    ],
  },
  {
    id: "spring-awakening",
    name: "Spring Awakening",
    price: "$65",
    priceNum: 65,
    image: productSpring,
    tag: "Seasonal",
    description:
      "Celebrate the season with a vibrant mix of tulips, daffodils, and ranunculus in soft pastels. This cheerful arrangement brings the freshness of spring indoors.",
    details: [
      "Seasonal tulips & daffodils",
      "Arranged in a glass vase",
      "Includes flower food sachet",
      "Lasts 5–7 days with care",
    ],
    sizes: [
      { label: "Standard", price: "$65" },
      { label: "Deluxe", price: "$95" },
      { label: "Grand", price: "$135" },
    ],
  },
  {
    id: "crimson-romance",
    name: "Crimson Romance",
    price: "$89",
    priceNum: 89,
    image: productRomance,
    tag: "Best Seller",
    description:
      "Deep red roses intertwined with burgundy dahlias and eucalyptus create a passionate, romantic statement. Ideal for anniversaries, date nights, or simply saying 'I love you.'",
    details: [
      "Premium long-stem red roses",
      "Burgundy dahlias & eucalyptus",
      "Gift-wrapped with tissue",
      "Lasts 7–10 days with care",
    ],
    sizes: [
      { label: "Standard", price: "$89" },
      { label: "Deluxe", price: "$139" },
      { label: "Grand", price: "$199" },
    ],
  },
  {
    id: "desert-bloom",
    name: "Desert Bloom",
    price: "$75",
    priceNum: 75,
    image: productDried,
    tag: "Dried",
    description:
      "A stunning arrangement of preserved flowers and dried botanicals in warm earth tones. This long-lasting piece adds a bohemian charm to any space.",
    details: [
      "Preserved & dried botanicals",
      "Warm earthy colour palette",
      "Lasts months without water",
      "Eco-friendly & sustainable",
    ],
    sizes: [
      { label: "Standard", price: "$75" },
      { label: "Deluxe", price: "$110" },
      { label: "Grand", price: "$160" },
    ],
  },
  {
    id: "peaceful-grace",
    name: "Peaceful Grace",
    price: "$95",
    priceNum: 95,
    image: productSympathy,
    tag: "Sympathy",
    description:
      "A serene arrangement of white lilies, soft chrysanthemums, and greenery offering comfort during difficult times. A gentle expression of care and remembrance.",
    details: [
      "White lilies & chrysanthemums",
      "Calming green foliage",
      "Includes a sympathy card",
      "Same-day delivery available",
    ],
    sizes: [
      { label: "Standard", price: "$95" },
      { label: "Deluxe", price: "$140" },
      { label: "Grand", price: "$195" },
    ],
  },
  {
    id: "tropical-paradise",
    name: "Tropical Paradise",
    price: "$85",
    priceNum: 85,
    image: productTropical,
    tag: "Exotic",
    description:
      "Bold birds of paradise, vibrant anthuriums, and lush tropical leaves create an exotic escape. This arrangement is a showstopper that transforms any room.",
    details: [
      "Birds of paradise & anthuriums",
      "Lush tropical foliage",
      "Presented in a ceramic pot",
      "Lasts 10–14 days with care",
    ],
    sizes: [
      { label: "Standard", price: "$85" },
      { label: "Deluxe", price: "$125" },
      { label: "Grand", price: "$175" },
    ],
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const getRelatedProducts = (id: string) =>
  products.filter((p) => p.id !== id).slice(0, 3);
