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
    price: "KES 120",
    priceNum: 120,
    image: productBridal,
    tag: "Money Bouquet",
description:
  "A creative and luxurious bouquet crafted with care, beautifully arranged to make a bold and unforgettable gift. Perfect for birthdays, graduations, and special celebrations.",
details: [
  "Customizable amount and denominations",
  "Elegant wrapping with premium ribbons",
  "Perfect for gifting on special occasions",
],
    sizes: [
      { label: "", price: "$120" },
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
    tag: "Flower Bouquet",
description:
  "A fresh and vibrant bouquet featuring a harmonious blend of seasonal blooms in soft, elegant tones. Perfect for brightening any space or celebrating life’s special moments with natural beauty and charm.",
details: [
  "Carefully selected seasonal flowers",
  "Expertly hand-arranged by florists",
  "Wrapped in elegant premium packaging",
  "Lasts 5–7 days with proper care",
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
    tag: "Kids Bouquet",
description:
  "A fun and cheerful bouquet designed especially for kids, featuring bright colorful blooms and playful accents that bring joy and excitement to any occasion. Perfect for birthdays, celebrations, or a sweet surprise.",
details: [
    "Playful wrapping with fun accents",
  "Fitted with accompanyingments like snacks ",
  "Perfect for birthdays and special treats",
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
    tag: "Lilies",
description:
  "A graceful and serene arrangement of fresh white lilies complemented by soft chrysanthemums and lush greenery. Thoughtfully designed to offer comfort, peace, and heartfelt sympathy during difficult times.",
details: [
  "Fresh white lilies & chrysanthemums",
  "Elegant calming green foliage",
  "Expertly arranged with care",
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
