export const newProductImports = \`
import goldenBlossom from "@/assets/GoldenBlossom.jpeg";
import graceBouquet from "@/assets/Grace bouquet.jpeg";
import heartfeltBouquet from "@/assets/Heartfelt bouquet.jpeg";
import kidsBouquet from "@/assets/Kids bouquet.jpeg";
import liliesBouquetI from "@/assets/lilies bouquet I.jpeg";
import liliesBouquetII from "@/assets/lilies bouquet II.jpeg";
import loveUBox from "@/assets/love U box.jpeg";
import loveyBouquet from "@/assets/Lovey bouquet.jpeg";
import luxeBouquet from "@/assets/luxe bouquet.jpeg";
import mixedBouquet from "@/assets/MixedBouquet.jpeg";
import orangeBouquet from "@/assets/Orange bouquet.jpeg";
import premiumRedRosesII from "@/assets/Premium red roses II.jpeg";
import premiumWhiteBouquet from "@/assets/Premium white bouquet.jpeg";
import pureWhite from "@/assets/Pure white.jpeg";
import safiBouquet from "@/assets/Safi bouquet.jpeg";
import signatureBouquet from "@/assets/Signature Bouquet.jpeg";
import tanaBouquet from "@/assets/Tana bouquet.jpeg";
import twilightBouquet from "@/assets/TwilightBouquet.jpeg";
import zestBouquet from "@/assets/Zest bouquet.jpeg";
import zuriBouquet from "@/assets/Zuri bouquet.jpeg";
\`;

export const newProducts = [
  {
    id: "golden-blossom",
    name: "Golden Blossom Bouquet",
    price: "$88",
    priceNum: 88,
    image: goldenBlossom,
    tag: "Premium",
    description: "Luxurious golden yellow roses and sunflowers arranged with elegant greenery for a radiant celebration.",
    details: [
      "Golden roses & sunflowers",
      "Premium luxury arrangement",
      "Gift box presentation",
      "Long-lasting vibrancy",
    ],
    sizes: [
      { label: "Standard", price: "$88" },
      { label: "Deluxe", price: "$130" },
      { label: "Grand", price: "$185" },
    ],
  },
  {
    id: "grace-bouquet",
    name: "Grace Bouquet",
    price: "$76",
    priceNum: 76,
    image: graceBouquet,
    tag: "Wedding",
    description: "Soft pastel roses and hydrangeas in graceful arrangement, perfect for weddings and special events.",
    details: [
      "Pastel roses & hydrangeas",
      "Bridal elegance",
      "Silk ribbon wrap",
      "Photogenic perfection",
    ],
    sizes: [
      { label: "Standard", price: "$76" },
      { label: "Deluxe", price: "$112" },
      { label: "Grand", price: "$158" },
    ],
  },
  {
    id: "heartfelt-bouquet",
    name: "Heartfelt Bouquet",
    price: "$69",
    priceNum: 69,
    image: heartfeltBouquet,
    tag: "Romance",
    description: "Warm pinks and reds expressing deep emotions for anniversaries or romantic gestures.",
    details: [
      "Pink & red roses mix",
      "Heartfelt arrangement",
      "Satin wrap",
      "7-10 days vase life",
    ],
    sizes: [
      { label: "Standard", price: "$69" },
      { label: "Deluxe", price: "$101" },
      { label: "Grand", price: "$141" },
    ],
  },
  {
    id: "kids-bouquet",
    name: "Kids Bouquet",
    price: "$58",
    priceNum: 58,
    image: kidsBouquet,
    tag: "Kids",
    description: "Bright, fun flowers designed especially for children, perfect for birthdays and small celebrations.",
    details: [
      "Colorful kids' flowers",
      "Fun playful wrap",
      "Child-safe stems",
      "Short vase life expected",
    ],
    sizes: [
      { label: "Standard", price: "$58" },
      { label: "Deluxe", price: "$85" },
      { label: "Grand", price: "$120" },
    ],
  },
  {
    id: "lilies-i",
    name: "Lilies Bouquet I",
    price: "$92",
    priceNum: 92,
    image: liliesBouquetI,
    tag: "Lilies",
    description: "Pure white lilies with lush greenery for purity and elegance in sympathy or formal settings.",
    details: [
      "Fresh white lilies",
      "Calming greenery",
      "Sympathy appropriate",
      "Long-lasting blooms",
    ],
    sizes: [
      { label: "Standard", price: "$92" },
      { label: "Deluxe", price: "$136" },
      { label: "Grand", price: "$192" },
    ],
  },
  {
    id: "lilies-ii",
    name: "Lilies Bouquet II",
    price: "$87",
    priceNum: 87,
    image: liliesBouquetII,
    tag: "Lilies",
    description: "Pink Asiatic lilies with roses for a softer, feminine sympathy or celebration arrangement.",
    details: [
      "Pink Asiatic lilies",
      "Accent roses",
      "Gentle color palette",
      "Extended vase life",
    ],
    sizes: [
      { label: "Standard", price: "$87" },
      { label: "Deluxe", price: "$129" },
      { label: "Grand", price: "$182" },
    ],
  },
  {
    id: "love-u-box",
    name: "Love U Money Box",
    price: "$135",
    priceNum: 135,
    image: loveUBox,
    tag: "Money Bouquet",
    description: "Creative cash bouquet design spelling 'LOVE U' – perfect unique gift for romance.",
    details: [
      "Custom money design",
      "Elegant presentation box",
      "Personalized message",
      "Customizable amounts",
    ],
    sizes: [
      { label: "Standard", price: "$135" },
      { label: "Deluxe", price: "$200" },
      { label: "Grand", price: "$280" },
    ],
  },
  {
    id: "lovey-bouquet",
    name: "Lovey Bouquet",
    price: "$64",
    priceNum: 64,
    image: loveyBouquet,
    tag: "Romance",
    description: "Sweet blush pinks and whites for everyday romance and appreciation gestures.",
    details: [
      "Blush pink roses",
      "White accent flowers",
      "Delicate beauty",
      "Perfect thank you gift",
    ],
    sizes: [
      { label: "Standard", price: "$64" },
      { label: "Deluxe", price: "$94" },
      { label: "Grand", price: "$134" },
    ],
  },
  {
    id: "luxe-bouquet",
    name: "Luxe Bouquet",
    price: "$105",
    priceNum: 105,
    image: luxeBouquet,
    tag: "Luxury",
    description: "Opulent large roses in jewel tones for luxury gifting and high-end occasions.",
    details: [
      "Large luxury roses",
      "Jewel tone palette",
      "Premium crystal wrap",
      "Statement piece",
    ],
    sizes: [
      { label: "Standard", price: "$105" },
      { label: "Deluxe", price: "$155" },
      { label: "Grand", price: "$220" },
    ],
  },
  {
    id: "mixed-bouquet",
    name: "Mixed Bouquet Delight",
    price: "$71",
    priceNum: 71,
    image: mixedBouquet,
    tag: "Best Seller",
    description: "Vibrant assortment of seasonal flowers for versatile gifting any occasion.",
    details: [
      "Seasonal mixed blooms",
      "Abundant variety",
      "Cellophane wrap",
      "Fresh daily selection",
    ],
    sizes: [
      { label: "Standard", price: "$71" },
      { label: "Deluxe", price: "$104" },
      { label: "Grand", price: "$146" },
    ],
  },
];
