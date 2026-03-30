import kidsBouquetI from "@/assets/Kids bouquet I.jpeg";
import kidsBouquetII from "@/assets/Kids bouquet II.jpeg";
import suiteBouquet from "@/assets/Suite bouquet.jpeg";
import valBouquet from "@/assets/Val.jpeg";
import valeriaBouquet from "@/assets/Valeria.jpeg";
import wBouquet from "@/assets/W-bouquet .jpeg";

export const newGifts = [
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
    image: wBouquet,
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

export const updatedGiftCategories = [
  { id: "romance", name: "Romance", count: 4 },
  { id: "birthday", name: "Birthday", count: 4 },
  { id: "new-baby", name: "New Baby", count: 1 },
  { id: "graduation", name: "Graduation", count: 1 },
  { id: "celebration", name: "Celebration", count: 3 },
  { id: "gift-sets", name: "Gift Sets", count: 2 },
  { id: "wedding", name: "Wedding", count: 1 },
];
