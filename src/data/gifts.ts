import productBridal from "@/assets/product-bridal.jpg";

import productRomance from "@/assets/product-romance.jpg";

import productSympathy from "@/assets/product-sympathy.jpg";


import kidsBouquetI from "@/assets/Kids bouquet I.jpeg";
import kidsBouquetII from "@/assets/Kids bouquet II.jpeg";
import suiteBouquet from "@/assets/Suite bouquet.jpeg";
import valBouquet from "@/assets/Val.jpeg";
import valeriaBouquet from "@/assets/Valeria.jpeg";


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
  { id: "romance", name: "Romance", count: 4 },
  { id: "birthday", name: "Birthday", count: 4 },
  { id: "new-baby", name: "New Baby", count: 1 },
  { id: "graduation", name: "Graduation", count: 1 },
  { id: "celebration", name: "Celebration", count: 3 },
  { id: "gift-sets", name: "Gift Sets", count: 2 },
  { id: "wedding", name: "Wedding", count: 1 },
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
    image:  productRomance,
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
    image:  productRomance,
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
    image:  productRomance,
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
    image:  productRomance,
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
    image:  productRomance,
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
    image:  productRomance,
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
  {
    id: "kids-romance",
    name: "Kids Romance Bouquet I",
    price: "$62",
    priceNum: 62,
    image: kidsBouquetI,
    category: "birthday",
    description: "Sweet bouquet for young romantics with soft pinks perfect for first crushes or valentines.",
    details: ["Kid-friendly flowers", "Romantic theme for children", "Fun packaging", "Short stems"],
    sizes: [
      { label: "Standard", price: "$62" },
      { label: "Deluxe", price: "$92" },
      { label: "Grand", price: "$132" },
    ],
  },
  {
    id: "kids-birthday-ii",
    name: "Kids Birthday Bouquet II",
    price: "$59",
    priceNum: 59,
    image: kidsBouquetII,
    category: "birthday",
    description: "Colorful birthday bouquet designed for children's parties with playful accents.",
    details: ["Bright birthday colors", "Party streamers", "Balloon option", "Fun and festive"],
    sizes: [
      { label: "Standard", price: "$59" },
      { label: "Deluxe", price: "$87" },
      { label: "Grand", price: "$123" },
    ],
  },
  {
    id: "suite-celebration",
    name: "Suite Celebration Gift",
    price: "$115",
    priceNum: 115,
    image: suiteBouquet,
    category: "celebration",
    description: "Luxury suite bouquet for corporate celebrations and VIP events.",
    details: ["Premium corporate flowers", "Elegant suite arrangement", "Business card holder", "Conference ready"],
    sizes: [
      { label: "Standard", price: "$115" },
      { label: "Deluxe", price: "$170" },
      { label: "Grand", price: "$240" },
    ],
  },
  {
    id: "valentine-special",
    name: "Valentine Special Bouquet",
    price: "$94",
    priceNum: 94,
    image: valBouquet,
    category: "romance",
    description: "Heart-shaped Valentine's bouquet with red roses and chocolates.",
    details: ["Valentine roses", "Heart design", "Chocolate truffles", "Romantic card"],
    sizes: [
      { label: "Standard", price: "$94" },
      { label: "Deluxe", price: "$139" },
      { label: "Grand", price: "$196" },
    ],
  },
  {
    id: "valeria-romance",
    name: "Valeria Romance",
    price: "$81",
    priceNum: 81,
    image: valeriaBouquet,
    category: "romance",
    description: "Valeria's favorite romantic bouquet with blush roses and baby's breath.",
    details: ["Blush roses specialty", "Romantic filler flowers", "Personalized tag", "Valeria approved"],
    sizes: [
      { label: "Standard", price: "$81" },
      { label: "Deluxe", price: "$119" },
      { label: "Grand", price: "$168" },
    ],
  },
  {
    id: "wedding-white",
    name: "Wedding White Bouquet",
    price: "$108",
    priceNum: 108,
    image:valeriaBouquet,
    category: "wedding",
    description: "Classic all-white wedding bouquet for bridesmaids and ceremony.",
    details: ["Bridal white roses", "Wedding appropriate", "Silk ribbon", "Bridal party ready"],
    sizes: [
      { label: "Standard", price: "$108" },
      { label: "Deluxe", price: "$160" },
      { label: "Grand", price: "$225" },
    ],
  },
];

export const getGift = (id: string) => gifts.find((g) => g.id === id);

export const getGiftsByCategory = (category: string) =>
  gifts.filter((g) => g.category === category);
