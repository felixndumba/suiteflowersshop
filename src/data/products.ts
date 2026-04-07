import productRomance from "@/assets/product-romance.jpg";

import productBridal from "@/assets/product-bridal.jpg";

import bouquet20Stem from "@/assets/20StemBouquet.jpeg";
import birthdayBouquetI from "@/assets/Birthday bouquet I.jpeg";
import birthdayBouquetII from "@/assets/Birthday bouquet II.jpeg";
import birthdayBouquetIII from "@/assets/Birthday bouquet III.jpeg";
import birthdayBouquetIV from "@/assets/Birthday bouquet IV.jpeg";
import birthdayMBouquet from "@/assets/Birthday M-bouquet.jpeg";
import birthdayBouquetMain from "@/assets/BirthdayBouquet.jpeg";
import classicRedWhite from "@/assets/Classic red&white.jpeg";
import creamBouquet from "@/assets/Cream bouquet.jpeg";
import delicateBouquet from "@/assets/Delicate bouquet.jpeg";
import elegantBouquet from "@/assets/ElegantBouquet.jpeg";
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
import suiteBouquet from "@/assets/Suite bouquet.jpeg";
import tanaBouquet from "@/assets/Tana bouquet.jpeg";
import twilightBouquet from "@/assets/TwilightBouquet.jpeg";
import valBouquet from "@/assets/Val.jpeg";
import valeriaBouquet from "@/assets/Valeria.jpeg";

import zestBouquet from "@/assets/Zest bouquet.jpeg";
import zuriBouquet from "@/assets/Zuri bouquet.jpeg";
import kidsBouquetI from "@/assets/Kids bouquet I.jpeg";
import kidsBouquetII from "@/assets/Kids bouquet II.jpeg";
import timelessBouquet from "@/assets/Timeless Bouquet.jpeg";
import ultimateBouquet from "@/assets/Ultimate bouquet.jpeg";
import winBouquet from "@/assets/Win bouquet .jpeg";

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
  // existing products...
 
  
  // ... (all previous products remain the same)
  {
    id: "heartfelt-bouquet",
    name: "Heartfelt Bouquet",
    price: "KES 9,600",
    priceNum: 9600,
    image: heartfeltBouquet,
    tag: "Romance",
    description: "Warm pinks and reds expressing deep emotions for anniversaries or romantic gestures.",
    details: [
      "100 Fresh red roses",
      "Complimented with a bottle of Rosso Nobille wine",
      "luxurious chocolates included",
      "personalized message card included",
    ],
    sizes: [
      { label: "Standard", price: "KES 9,600" },
      { label: "Deluxe", price: "$101" },
      { label: "Grand", price: "$141" },
    ],
  },
  {
    id: "premium-red-ii",
    name: "Premium Red Roses II",
    price: "KES 2,500",
    priceNum: 2500,
    image: premiumRedRosesII,
    tag: "Flower Bouquet",
    description: "Extra-large premium red roses for ultimate romantic statements.",
    details: [
      "premium red roses",
      "Big head 40 stem bouquet",
      "gypsium compliment",
      "Elegant black wrap",
    ],
    sizes: [
      { label: "Standard", price: "KES 2,500" },
      { label: "Deluxe", price: "$165" },
      { label: "Grand", price: "$235" },
    ],
  },
  {
    id: "timeless-bouquet",
    name: "Timeless Bouquet",
    price: "KES 10,350",
    priceNum: 10350,
    image: timelessBouquet,
    tag: "Money Bouquet",
    description: "Classic and elegant timeless bouquet that never goes out of style, perfect for any occasion.",
    details: [
      "Classic arrangement",
      "KES 3000 in 50 denominations",
       "Rosso nobille red wine included",
      "Wine holder inclusive",
     "Ferrero Rocher chocolates included",
      
    ],
    sizes: [
      { label: "Standard", price: "$95" },
      { label: "Deluxe", price: "$140" },
      { label: "Grand", price: "$195" },
    ],
  },
  {
    id: "ultimate-bouquet",
    name: "Ultimate Bouquet",
    price: "KES 24,500",
    priceNum: 125,
    image: ultimateBouquet,
    tag: "Money Bouquet",
    description: "A unique and eye-catching bouquet crafted with real cash notes, beautifully arranged to create a memorable and luxurious gift. Perfect for birthdays, graduations, or making a bold impression.",
    details: [
  "Includes KES 20,000 in customizable denominations",
  "Carefully folded and arranged cash notes",
  "Elegant premium wrapping",
  "Personalized message card available",
],
    sizes: [
      { label: "Standard", price: "KES 24,500" },
      { label: "Deluxe", price: "$185" },
      { label: "Grand", price: "$260" },
    ],
  },
  {
    id: "win-bouquet",
    name: "Win Bouquet",
    price: "KES 7,450",
    priceNum: 7450,
    image: winBouquet,
    tag: "Money Bouquet",
description: "A bold and celebratory money bouquet designed to mark achievements, promotions, and winning moments. Crafted with real cash notes and stylish wrapping, it’s a standout gift that feels both exciting and meaningful.",
details: [
  "Includes KES 5,000 in customizable denominations",
  "Wrapped in a bold, celebratory design",
  "Optional rose accents for a floral touch",
  "Same-day delivery available",
],
    sizes: [
      { label: "Standard", price: "$88" },
      { label: "Deluxe", price: "$130" },
      { label: "Grand", price: "$185" },
    ],
  },
  {
    id: "tropical-paradise",
    name: "Tropical Paradise",
    price: "$85",
    priceNum: 85,
    image: productRomance,
    tag: "Flower Bouquet",
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
  {
    id: "birthday-bliss-i",
    name: "Birthday Bliss Bouquet I",
    price: "KES 5000",
    priceNum: 5000,
    image: birthdayBouquetI,
    tag: "Birthday",
    description:
      "Vibrant mix of colorful blooms perfect for birthday celebrations. Bright pinks, oranges, and yellows create joyful energy.",
    details: [
      "Assorted birthday flowers",
      "Festive ribbon wrap",
      "Birthday card option",
      "Lasts 5-7 days",
    ],
    sizes: [
      { label: "Standard", price: "$72" },
      { label: "Deluxe", price: "$105" },
      { label: "Grand", price: "$145" },
    ],
  },
  {
    id: "birthday-bliss-ii",
    name: "Birthday Bliss Bouquet II",
    price: "KES 3,850",
    priceNum: 3850,
    image: birthdayBouquetII,
    tag: "Birthday",
    description:
      "Classic birthday bouquet with rich pinks and whites for a cheerful celebration any age will love.",
    details: [
      "Pink & white roses mix",
      "Elegant cellophane wrap",
      "Fresh and long-lasting",
      "Perfect for all ages",
    ],
    sizes: [
      { label: "Standard", price: "KES 3,850" },
      { label: "Deluxe", price: "$98" },
      { label: "Grand", price: "$138" },
    ],
  },
  {
    id: "birthday-bliss-iii",
    name: "Birthday Bliss Bouquet III",
    price: "KES 3,850",
    priceNum: 3850,
    image: birthdayBouquetIII,
    tag: "Birthday",
    description:
      "Lush bouquet featuring lavender tones and greenery for sophisticated birthday wishes.",
    details: [
      "Lavender and pink blooms",
      "Abundant lush greenery",
      "Premium arrangement",
      "7-10 days vase life",
    ],
    sizes: [
      { label: "Standard", price: "$74" },
      { label: "Deluxe", price: "$108" },
      { label: "Grand", price: "$148" },
    ],
  },
  {
    id: "birthday-bliss-iv",
    name: "Birthday Bliss Bouquet IV",
    price: "KES 13,500",
    priceNum: 13500,
    image: birthdayBouquetIV,
    tag: "Birthday",
    description:
      "A lavish and festive birthday bouquet blending vibrant blooms with stylish presentation, perfect for celebrating milestones in grand fashion.",
    details: [
    "Bold, eye-catching floral arrangement",
    "Includes KES 10,000 in customizable denominations",
    "Customizable greeting card for personal wishes",
    "Customized ribbon",
    ],
    sizes: [
      { label: "Standard", price: "KES 13,500" },
      { label: "Deluxe", price: "$102" },
      { label: "Grand", price: "$142" },
    ],
  },
  {
    id: "20-stem-classic",
    name: "20 Stem Classic Bouquet",
    price: "KES 1000",
    priceNum: 1000,
    image: bouquet20Stem,
    tag: "Flower Bouquet",
    description:
      "Elegant 20-stem bouquet of fresh roses in mixed soft tones for everyday elegance.",
    details: [
      "20 premium stems",
      "Premium red roses",
      "Simple ribbon wrap",
      "Perfect everyday gift",
    ],
    sizes: [
      { label: "Standard", price: "KEs 1000" },
      { label: "Deluxe", price: "$80" },
      { label: "Grand", price: "$115" },
    ],
  },
  {
    id: "classic-red-white",
    name: "Classic Red & White Bouquet",
    price: "KES 3,000",
    priceNum: 3000,
    image: classicRedWhite,
    tag: "Romance",
    description:
      "Celebrate love and unity with this classic bouquet of fresh red and white roses, hand-tied and elegantly wrapped.Perfect for anniversaries,weddings or special moments.",
    details: [
      "Red & white roses combination",
      "Classic combination",
       "Same-day delivery available",
    ],
    sizes: [
      { label: "Standard", price: "KES 3,000" },
      { label: "Deluxe", price: "$122" },
      { label: "Grand", price: "$172" },
    ],
  },
  {
    id: "cream-dream",
    name: "Cream Dream Bouquet",
    price: "KES 8,450",
    priceNum: 8450,
    image: creamBouquet,
    tag: "Money Bouquet",
    description:
      "Soft cream and blush tones create a romantic, dreamy bouquet ideal for weddings.",
    details: [
      "White and black wrap",
      "Suppliment of roses",
      "Inclusive 6K cash with denominations of 100",
       
    ],
    sizes: [
      { label: "Standard", price: "KES 8,450" },
      { label: "Deluxe", price: "$115" },
      { label: "Grand", price: "$160" },
    ],
  },
  {
    id: "delicate-touch",
    name: "Delicate Touch Bouquet",
    price: "KES 7,850",
    priceNum: 7850,
    image: delicateBouquet,
   tag: "Money Bouquet",
description: "A bold and celebratory money bouquet designed to mark achievements, promotions, and winning moments. Crafted with real cash notes and stylish wrapping, it’s a standout gift that feels both exciting and meaningful.",
details: [
  "Includes KES 5,000 in customizable denominations",
  "Wrapped in a bold,customizable celebratory design",
  "Optional rose accents for a floral touch",
  "Same-day delivery available",
],
    sizes: [
      { label: "Standard", price: "KES 7,850" },
      { label: "Deluxe", price: "$92" },
      { label: "Grand", price: "$132" },
    ],
  },
  {
    id: "elegant-affair",
    name: "Elegant Affair Bouquet",
    price: "KES 1500",
    priceNum: 98,
    image: elegantBouquet,
    tag: "Flower Bouquet",
    description:
      "Sophisticated white and blush bouquet for special anniversaries and events.",
    details: [
      "Premium red roses",
      "Same day delivery",
      "Elegant presentation",
      "30 red rose stem arrangement",
    ],
    sizes: [
      { label: "Standard", price: "$98" },
      { label: "Deluxe", price: "$145" },
      { label: "Grand", price: "$200" },
    ],
  },
  {
    id: "golden-blossom",
    name: "Golden Blossom Bouquet",
    price: "KES 2000",
    priceNum: 88,
    image: goldenBlossom,
    tag: "Flower Bouquet",
    description: "Luxurious golden yellow roses and sunflowers arranged with elegant greenery for a radiant celebration.",
    details: [
      "Yellow roses & sunflowers",
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
    price: "KES 13,250",
    priceNum: 13250,
    image: graceBouquet,
    tag: "Money Bouquet",
description: "A soft and elegant money bouquet featuring carefully arranged cash notes with delicate floral accents, perfect for weddings, special events, and meaningful celebrations.",
details: [
  "Includes KES 10,000 in customizable denominations",
  "Neatly folded and styled cash arrangement",
  "Soft rose accents for a graceful touch",
  "Beautifully wrapped for a photogenic finish",
],
    sizes: [
      { label: "Standard", price: "KES 13,250" },
      { label: "Deluxe", price: "$112" },
      { label: "Grand", price: "$158" },
    ],
  },
  
  {
    id: "kids-bouquet",
    name: "Kids Bouquet",
    price: "KES 3000",
    priceNum: 3000,
    image: kidsBouquet,
    tag: "Kids",
    description: "Bright, fun bouquet designed especially for children, perfect for birthdays and small celebrations.",
    details: [
      "Inclusive kes1000 in 50 denominations",
      "KES 700 worth of snacks",
      "Yellow roses additions",
      "Wrapped in a fun packaging style",
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
    price: "KES 4,500",
    priceNum: 4500,
    image: liliesBouquetI,
    tag: "Lilies",
   description: "An elegant display of pristine lilies complemented by orange roses , with blooms that gradually open to reveal their full beauty, adding a lasting and meaningful presence.",    details: [
      "Fresh lilies",
      "Calming greenery",
      "Supplimented with roses",
      "Long-lasting blooms",
    ],
    sizes: [
      { label: "Standard", price: "KES 4,500" },
      { label: "Deluxe", price: "$136" },
      { label: "Grand", price: "$192" },
    ],
  },
  {
    id: "lilies-ii",
    name: "Lilies Bouquet II",
    price: "KES 3500",
    priceNum: 3500,
    image: liliesBouquetII,
    tag: "Lilies",
    description: "Pink Asiatic lilies with roses for a softer, feminine sympathy or celebration arrangement.",
    details: [
      "Pink Asiatic lilies",
      "Supplimented with gypsium",
      "Gentle color palette",
     
    ],
    sizes: [
      { label: "Standard", price: "KES 3500" },
      { label: "Deluxe", price: "$129" },
      { label: "Grand", price: "$182" },
    ],
  },
  {
    id: "love-u-box",
    name: "Love U Money Box",
    price: " KES 12,800",
    priceNum: 12800,
    image: loveUBox,
    tag: "Romance",
    description: "Express your love with a striking 'LOVE U' cash bouquet, featuring vibrant red roses arranged creatively in an elegant box—an unforgettable and unique gift for romance.",
    details: [
      "Red roses in I love U box design", 
      "Presented in a elegant black box adorned with a ribbon.",
      "Personalized message available",
      "Ferrero Rocher chocolates included",
    ],
    sizes: [
      { label: "Standard", price: "KES 12,800" },
      { label: "Deluxe", price: "$200" },
      { label: "Grand", price: "$280" },
    ],
  },
  {
    id: "lovey-bouquet",
    name: "Lovey Bouquet",
    price: "KES 8,000",
    priceNum: 8000,
    image: loveyBouquet,
    tag: "Flower Bouquet",
    description: "Celebrate love with the Lovey set featuring a bouquet of deep red roses that express passion and affection ",
    details: [
      "Complimented by a box of premium chocolates",
      "Bottle of Rosso Nobille wine",
      "Personalized message card availabele",
      "Elegant presentation",
    ],
    sizes: [
      { label: "Standard", price: "KeS 8000" },
      { label: "Deluxe", price: "$94" },
      { label: "Grand", price: "$134" },
    ],
  },
  {
    id: "luxe-bouquet",
    name: "Luxe Bouquet",
    price: " KES 5,500",
    priceNum: 5500,
    image: luxeBouquet,
   tag: "Flower Bouquet",
description: "A soft and romantic arrangement of blush pink roses, white chrysanthemums, and delicate purple fillers, beautifully arranged in a classic basket for a graceful and heartfelt presentation.",
details: [
  "Fresh pink roses and white chrysanthemums",
  "Delicate purple filler flowers for contrast",
  "Arranged in an elegant handled basket",
  "Perfect for anniversaries, birthdays, and heartfelt gifts",
],
    sizes: [
      { label: "Standard", price: "KES 5,500" },
      { label: "Deluxe", price: "$155" },
      { label: "Grand", price: "$220" },
    ],
  },
  {
    id: "mixed-bouquet",
    name: "Mixed Bouquet Delight",
    price: "KES 1,800",
    priceNum: 1800,
    image: mixedBouquet,
    tag: "Flower Bouquet",
  description: "A striking and elegant bouquet featuring a rich blend of red and white roses, creating a bold yet romantic statement for any special occasion.",
  details: [
    "Premium red and white roses",
    "Full, round arrangement",
    "Accented with delicate baby’s breath",
    "Luxury black wrap with gold marble design",
    "Hand-tied, elegant presentation",
    "Perfect for romantic and celebratory moments"
  ],
    sizes: [
      { label: "Standard", price: "KES 1,800" },
      { label: "Deluxe", price: "$104" },
      { label: "Grand", price: "$146" },
    ],
  },
  {
    id: "orange-bouquet",
    name: "Orange Zest Bouquet",
    price: "KES 4,900",
    priceNum: 4900,
    image: orangeBouquet,
    tag: "Flower Bouquet",
    description: "Bold orange roses bringing energy and warmth to any space.",
    details: [
      "Orange roses",
      "Includes Guylian chocolate",
      "Comes with a personalized card",
      "Perfect pick-me-up",
    ],
    sizes: [
      { label: "Standard", price: "KES 4,900" },
      { label: "Deluxe", price: "$98" },
      { label: "Grand", price: "$138" },
    ],
  },
  
  {
    id: "premium-white",
    name: "Premium White Bouquet",
    price: "$99",
    priceNum: 99,
    image: premiumWhiteBouquet,
    tag: "Flower Bouquet",
    description: "Flawless white roses and orchids for bridal and formal elegance.",
    details: [
      "White roses & orchids",
      "Bridal perfection",
      "Crystal clear wrap",
      "Sophisticated beauty",
    ],
    sizes: [
      { label: "Standard", price: "$99" },
      { label: "Deluxe", price: "$146" },
      { label: "Grand", price: "$206" },
    ],
  },
  {
    id: "pure-white",
    name: "Pure White Bouquet",
    price: "$84",
    priceNum: 84,
    image: pureWhite,
    tag: "Flower Bouquet",
    description: "Clean white lilies and roses symbolizing purity and peace.",
    details: [
      "White lilies & roses",
      "Pure serene palette",
      "Sympathy suitable",
      "Long-lasting comfort",
    ],
    sizes: [
      { label: "Standard", price: "$84" },
      { label: "Deluxe", price: "$124" },
      { label: "Grand", price: "$174" },
    ],
  },
  {
    id: "safi-bouquet",
    name: "Safi Bouquet",
    price: "KES 6,000",
    priceNum: 6000,
   image: safiBouquet,
tag: "Money Bouquet",
description: "A unique Safi-style money bouquet featuring neatly arranged cash notes with a touch of tropical-inspired styling, perfect for a standout and memorable gift.",
details: [
  "Includes KES 4,000 in denominations of 50",
  "Carefully folded and arranged cash notes",
  "Exotic-inspired presentation",
  "Customizable message card available",
],
    sizes: [
      { label: "Standard", price: "KES 6,000" },
      { label: "Deluxe", price: "$107" },
      { label: "Grand", price: "$150" },
    ],
  },
  {
    id: "signature-bouquet",
    name: "Signature Bouquet",
    price: "KES 1500",
    priceNum: 96,
    image: signatureBouquet,
    tag: "Flower Bouquet",
    description: "Our signature arrangement combining favorite blooms for timeless appeal.",
    details: [
      "Signature house blend",
      "Timeless favorites",
      "Gift box available",
      "Customer favorite",
    ],
    sizes: [
      { label: "Standard", price: "$96" },
      { label: "Deluxe", price: "$142" },
      { label: "Grand", price: "$200" },
    ],
  },
  {
    id: "suite-celebration",
    name: "Suite Celebration Gift",
    price: "$115",
    priceNum: 115,
    image: suiteBouquet,
    tag: "Flower Bouquet",
    description: "Luxury suite bouquet for corporate celebrations and VIP events.",
    details: [
      "Premium corporate flowers",
      "Elegant suite arrangement",
      "Business card holder",
      "Conference ready",
    ],
    sizes: [
      { label: "Standard", price: "$115" },
      { label: "Deluxe", price: "$170" },
      { label: "Grand", price: "$240" },
    ],
  },
  {
    id: "tana-bouquet",
    name: "Tana Bouquet",
    price: "$79",
    priceNum: 79,
    image: tanaBouquet,
    tag: "Flower Bouquet",
    description: "Contemporary design with bold colors and unique textures.",
    details: [
      "Modern bold mix",
      "Unique textures",
      "Trendy arrangement",
      "Instagram worthy",
    ],
    sizes: [
      { label: "Standard", price: "$79" },
      { label: "Deluxe", price: "$116" },
      { label: "Grand", price: "$163" },
    ],
  },
  {
    id: "twilight-bouquet",
    name: "Twilight Bouquet",
    price: "KES 2000",
    priceNum: 2000,
    image: twilightBouquet,
    tag: "Flower Bouquet",
    description: "Deep red and white roses evoking twilight romance and mystery.",
    details: [
      "Twilight mixed palette",
      "Accompanied with a dairy cadbury ",
      "Accompanied with a customizable card",
      "Dramatic beauty",
    ],
    sizes: [
      { label: "Standard", price: "$91" },
      { label: "Deluxe", price: "$134" },
      { label: "Grand", price: "$189" },
    ],
  },
  {
    id: "graduation-special",
    name: "Graduation Special Bouquet",
    price: "KES 23,500",
    priceNum: 23500,
    image: valBouquet,
    tag: "Money Bouquet",
    description: "Heart-shaped Valentine's bouquet with red roses and chocolates.",
    details: [
      "20K cash with denominations of your choosing",
      "Cuatomized ribbon",
      "Rose compliments",
    ],
    sizes: [
      { label: "Standard", price: "KES 23,500" },
      { label: "Deluxe", price: "$139" },
      { label: "Grand", price: "$196" },
    ],
  },
  {
    id: "valeria-romance",
    name: "Valeria Romance",
    price: "KES 3,500",
    priceNum: 3500,
    image: valeriaBouquet,
    tag: "Romance",
    description: "Valeria's favorite romantic bouquet with blush roses and baby's breath.",
    details: [
      "Blush roses specialty",
      "Romantic filler flowers",
      "Personalized tag",
      "Valeria approved",
    ],
    sizes: [
      { label: "Standard", price: "$81" },
      { label: "Deluxe", price: "$119" },
      { label: "Grand", price: "$168" },
    ],
  },
  
  {
    id: "zest-bouquet",
    name: "Zest Bouquet",
    price: "KES 2,200",
    priceNum: 2200,
    image: zestBouquet,
    tag: "Flower Bouquet",
    description: "A vibrant mix of yellow and white roses with gypsophila, arranged in a layered 'stepped' design to create cheerful, uplifting energy. A card can be included for a personal touch.",
    details: [
      "Mixed yellow & white roses zest",
      "gypsium compliment",
      "Layered 'stepped' floral arrangement",
      "Card option available",
    ],
    sizes: [
      { label: "Standard", price: "KES 2,200" },
      { label: "Deluxe", price: "$97" },
      { label: "Grand", price: "$137" },
    ],
  },
  {
    id: "zuri-bouquet",
    name: "Zuri Bouquet",
    price: "$83",
    priceNum: 83,
    image: zuriBouquet,
    tag: "Money Bouquet",
    description: "Beautiful Zuri arrangement featuring exotic African blooms.",
    details: [
      "Exotic African flowers",
      "Zuri signature style",
      "Cultural elegance",
      "Unique beauty",
    ],
    sizes: [
      { label: "Standard", price: "$83" },
      { label: "Deluxe", price: "$122" },
      { label: "Grand", price: "$171" },
    ],
  },
  {
    id: "kids-romance",
    name: "Kids Romance Bouquet I",
    price: "KES 3000",
    priceNum: 3000,
    image: kidsBouquetI,
    tag: "Kids",
    description: "Sweet bouquet for kids with snack attachment perfect for birthdays or celebrations.",
    details: ["Some touch of red roses", "KES 1000 in 50 denominations", "Fun packaging style", "Snacks included"],
    sizes: [
      { label: "Standard", price: "$62" },
      { label: "Deluxe", price: "$92" },
      { label: "Grand", price: "$132" },
    ],
  },
  {
    id: "kids-birthday-ii",
    name: "Kids Birthday Bouquet II",
    price: "kES 4,100",
    priceNum: 4100,
    image: kidsBouquetII,
    tag: "Kids",
    description: "Colorful birthday bouquet designed for children's parties with playful accents.",
    details: ["Inclusive 2K cash wrapped gently", "Inclusive snacks", "Suppliment of roses also available", "Fun and festive"],
    sizes: [
      { label: "Standard", price: "KES 4,100" },
      { label: "Deluxe", price: "$87" },
      { label: "Grand", price: "$123" },
    ],
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const getRelatedProducts = (id: string) =>
  products.filter((p) => p.id !== id).slice(0, 3);
