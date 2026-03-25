import productBridal from "@/assets/product-bridal.jpg";
import productSpring from "@/assets/product-spring.jpg";
import productRomance from "@/assets/product-romance.jpg";
import productDried from "@/assets/product-dried.jpg";
import productSympathy from "@/assets/product-sympathy.jpg";
import productTropical from "@/assets/product-tropical.jpg";

export interface GiftItem {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  image: string;
  category: string;
  description: string;
  details: string[];
  sizes: { label: string; price: string }[];
}

export const giftCategories = [
  { id: "romance", name: "Romance", count: 2 },
  { id: "birthday", name: "Birthday", count: 2 },
  { id: "new-baby", name: "New Baby", count: 1 },
  { id: "graduation", name: "Graduation", count: 1 },
  { id: "celebration", name: "Celebration", count: 2 },
  { id: "gift-sets", name: "Gift Sets", count: 2 },
];

export const gifts: GiftItem[] = [
  {
    id: "romantic-red-roses",
    name: "Romantic Red Roses",
    price: "$89",
    priceNum: 89,
    image: productRomance,
    category: "romance",
    description: "A classic expression of love with premium long-stem red roses arranged with eucalyptus and baby's breath.",
    details: ["24 premium red roses", "Satin ribbon wrap", "Includes love note card", "Same-day delivery"],
    sizes: [
      { label: "Standard", price: "$89" },
      { label: "Deluxe", price: "$139" },
      { label: "Grand", price: "$199" },
    ],
  },
  {
    id: "sweetheart-bouquet",
    name: "Sweetheart Bouquet",
    price: "$75",
    priceNum: 75,
    image: productBridal,
    category: "romance",
    description: "Soft pink peonies and white roses create a tender, romantic arrangement.",
    details: ["Pink peonies & white roses", "Glass vase included", "Flower food sachet", "Lasts 7-10 days"],
    sizes: [
      { label: "Standard", price: "$75" },
      { label: "Deluxe", price: "$110" },
      { label: "Grand", price: "$155" },
    ],
  },
  {
    id: "birthday-blooms",
    name: "Birthday Blooms",
    price: "$65",
    priceNum: 65,
    image: productSpring,
    category: "birthday",
    description: "A vibrant mix of colorful flowers to make any birthday celebration extra special.",
    details: ["Bright seasonal mix", "Festive wrapping", "Birthday card included", "Lasts 5-7 days"],
    sizes: [
      { label: "Standard", price: "$65" },
      { label: "Deluxe", price: "$95" },
      { label: "Grand", price: "$135" },
    ],
  },
  {
    id: "confetti-garden",
    name: "Confetti Garden",
    price: "$70",
    priceNum: 70,
    image: productTropical,
    category: "birthday",
    description: "A joyful explosion of colorful blooms in a decorative pot, perfect for birthdays.",
    details: ["Mixed tropical flowers", "Ceramic pot included", "Low maintenance", "Lasts 10-14 days"],
    sizes: [
      { label: "Standard", price: "$70" },
      { label: "Deluxe", price: "$105" },
      { label: "Grand", price: "$150" },
    ],
  },
  {
    id: "gentle-welcome",
    name: "Gentle Welcome",
    price: "$85",
    priceNum: 85,
    image: productSympathy,
    category: "new-baby",
    description: "Soft pastel blooms to welcome a new arrival with love and tenderness.",
    details: ["Soft pastel palette", "Plush toy included", "Welcome card", "Same-day delivery"],
    sizes: [
      { label: "Standard", price: "$85" },
      { label: "Deluxe", price: "$120" },
      { label: "Grand", price: "$165" },
    ],
  },
  {
    id: "bright-future",
    name: "Bright Future",
    price: "$60",
    priceNum: 60,
    image: productSpring,
    category: "graduation",
    description: "Bold, bright flowers celebrating achievement and the exciting road ahead.",
    details: ["Sunflowers & bright mix", "Congratulations card", "Gift wrapped", "Lasts 5-7 days"],
    sizes: [
      { label: "Standard", price: "$60" },
      { label: "Deluxe", price: "$90" },
      { label: "Grand", price: "$130" },
    ],
  },
  {
    id: "party-popper",
    name: "Party Popper",
    price: "$78",
    priceNum: 78,
    image: productTropical,
    category: "celebration",
    description: "An exuberant arrangement of exotic flowers for any celebration worth remembering.",
    details: ["Exotic flower mix", "Statement arrangement", "Ceramic vase", "Lasts 10-14 days"],
    sizes: [
      { label: "Standard", price: "$78" },
      { label: "Deluxe", price: "$115" },
      { label: "Grand", price: "$160" },
    ],
  },
  {
    id: "cheers-arrangement",
    name: "Cheers Arrangement",
    price: "$95",
    priceNum: 95,
    image: productRomance,
    category: "celebration",
    description: "Deep, rich tones perfect for milestone celebrations and special achievements.",
    details: ["Burgundy & gold palette", "Premium stems", "Gift box option", "Lasts 7-10 days"],
    sizes: [
      { label: "Standard", price: "$95" },
      { label: "Deluxe", price: "$140" },
      { label: "Grand", price: "$195" },
    ],
  },
  {
    id: "bloom-box",
    name: "Bloom Box",
    price: "$110",
    priceNum: 110,
    image: productDried,
    category: "gift-sets",
    description: "A curated gift box with dried flowers, scented candle, and artisan chocolates.",
    details: ["Dried flower arrangement", "Scented candle", "Artisan chocolates", "Luxury gift box"],
    sizes: [
      { label: "Standard", price: "$110" },
      { label: "Deluxe", price: "$155" },
      { label: "Grand", price: "$210" },
    ],
  },
  {
    id: "self-care-set",
    name: "Self-Care Set",
    price: "$95",
    priceNum: 95,
    image: productBridal,
    category: "gift-sets",
    description: "Fresh flowers paired with bath salts and a silk eye mask for ultimate relaxation.",
    details: ["Fresh flower bouquet", "Bath salt set", "Silk eye mask", "Premium packaging"],
    sizes: [
      { label: "Standard", price: "$95" },
      { label: "Deluxe", price: "$140" },
      { label: "Grand", price: "$190" },
    ],
  },
];

export const getGift = (id: string) => gifts.find((g) => g.id === id);

export const getGiftsByCategory = (category: string) =>
  gifts.filter((g) => g.category === category);
