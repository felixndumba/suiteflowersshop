import productBridal from "@/assets/product-bridal.jpg";
import productSpring from "@/assets/product-spring.jpg";
import productRomance from "@/assets/product-romance.jpg";
import productDried from "@/assets/product-dried.jpg";
import productSympathy from "@/assets/product-sympathy.jpg";
import productTropical from "@/assets/product-tropical.jpg";
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
import tanaBouquet from "@/assets/Tana bouquet.jpeg";
import twilightBouquet from "@/assets/TwilightBouquet.jpeg";
import zestBouquet from "@/assets/Zest bouquet.jpeg";
import zuriBouquet from "@/assets/Zuri bouquet.jpeg";

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
      "A fresh and vibrant bouquet featuring a harmonious blend of seasonal blooms in soft, elegant tones. Perfect for brightening any space or celebrating life's special moments with natural beauty and charm.",
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
      "Fitted with accompaniments like snacks",
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
  {
    id: "birthday-bliss-i",
    name: "Birthday Bliss Bouquet I",
    price: "$72",
    priceNum: 72,
    image: birthdayBouquetI,
    tag: "Birthday Special",
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
    price: "$68",
    priceNum: 68,
    image: birthdayBouquetII,
    tag: "Best Seller",
    description:
      "Classic birthday bouquet with rich pinks and whites for a cheerful celebration any age will love.",
    details: [
      "Pink & white roses mix",
      "Elegant cellophane wrap",
      "Fresh and long-lasting",
      "Perfect for all ages",
    ],
    sizes: [
      { label: "Standard", price: "$68" },
      { label: "Deluxe", price: "$98" },
      { label: "Grand", price: "$138" },
    ],
  },
  {
    id: "birthday-bliss-iii",
    name: "Birthday Bliss Bouquet III",
    price: "$74",
    priceNum: 74,
    image: birthdayBouquetIII,
    tag: "Birthday Special",
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
    price: "$70",
    priceNum: 70,
    image: birthdayBouquetIV,
    tag: "Party Favorite",
    description:
      "Fun and festive bouquet with bold colors perfect for lively birthday parties.",
    details: [
      "Mixed bold colors",
      "Party-ready design",
      "Gift box option",
      "Celebration essential",
    ],
    sizes: [
      { label: "Standard", price: "$70" },
      { label: "Deluxe", price: "$102" },
      { label: "Grand", price: "$142" },
    ],
  },
  {
    id: "20-stem-classic",
    name: "20 Stem Classic Bouquet",
    price: "$55",
    priceNum: 55,
    image: bouquet20Stem,
    tag: "Classic Choice",
    description:
      "Elegant 20-stem bouquet of fresh roses in mixed soft tones for everyday elegance.",
    details: [
      "20 premium stems",
      "Mixed soft tones",
      "Simple ribbon wrap",
      "Perfect everyday gift",
    ],
    sizes: [
      { label: "Standard", price: "$55" },
      { label: "Deluxe", price: "$80" },
      { label: "Grand", price: "$115" },
    ],
  },
  {
    id: "classic-red-white",
    name: "Classic Red & White Bouquet",
    price: "$82",
    priceNum: 82,
    image: classicRedWhite,
    tag: "Romance",
    description:
      "Traditional red and white roses symbolizing pure love and celebration.",
    details: [
      "Red & white roses",
      "Classic combination",
      "Symbolic arrangement",
      "Long-lasting beauty",
    ],
    sizes: [
      { label: "Standard", price: "$82" },
      { label: "Deluxe", price: "$122" },
      { label: "Grand", price: "$172" },
    ],
  },
  {
    id: "cream-dream",
    name: "Cream Dream Bouquet",
    price: "$78",
    priceNum: 78,
    image: creamBouquet,
    tag: "Wedding Favorite",
    description:
      "Soft cream and blush tones create a romantic, dreamy bouquet ideal for weddings.",
    details: [
      "Cream roses & peonies",
      "Blush accent flowers",
      "Bridal quality",
      "Photographer favorite",
    ],
    sizes: [
      { label: "Standard", price: "$78" },
      { label: "Deluxe", price: "$115" },
      { label: "Grand", price: "$160" },
    ],
  },
  {
    id: "delicate-touch",
    name: "Delicate Touch Bouquet",
    price: "$62",
    priceNum: 62,
    image: delicateBouquet,
    tag: "Sympathy",
    description:
      "Gentle pastel blooms offering comfort and serenity for thoughtful moments.",
    details: [
      "Pastel delicate flowers",
      "Soft comforting tones",
      "Sympathy appropriate",
      "Peaceful arrangement",
    ],
    sizes: [
      { label: "Standard", price: "$62" },
      { label: "Deluxe", price: "$92" },
      { label: "Grand", price: "$132" },
    ],
  },
  {
    id: "elegant-affair",
    name: "Elegant Affair Bouquet",
    price: "$98",
    priceNum: 98,
    image: elegantBouquet,
    tag: "Anniversary",
    description:
      "Sophisticated white and blush bouquet for special anniversaries and events.",
    details: [
      "Premium white roses",
      "Blush hydrangeas",
      "Luxury presentation",
      "Event-worthy elegance",
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
  {
    id: "orange-bouquet",
    name: "Orange Zest Bouquet",
    price: "$67",
    priceNum: 67,
    image: orangeBouquet,
    tag: "Vibrant",
    description: "Bold orange gerberas and lilies bringing energy and warmth to any space.",
    details: [
      "Orange gerberas & lilies",
      "Energetic warm tones",
      "Cheerful arrangement",
      "Perfect pick-me-up",
    ],
    sizes: [
      { label: "Standard", price: "$67" },
      { label: "Deluxe", price: "$98" },
      { label: "Grand", price: "$138" },
    ],
  },
  {
    id: "premium-red-ii",
    name: "Premium Red Roses II",
    price: "$112",
    priceNum: 112,
    image: premiumRedRosesII,
    tag: "Roses",
    description: "Extra-large premium red roses for ultimate romantic statements.",
    details: [
      "36 premium red roses",
      "Extra-large blooms",
      "Luxury vase included",
      "10+ days vase life",
    ],
    sizes: [
      { label: "Standard", price: "$112" },
      { label: "Deluxe", price: "$165" },
      { label: "Grand", price: "$235" },
    ],
  },
  {
    id: "premium-white",
    name: "Premium White Bouquet",
    price: "$99",
    priceNum: 99,
    image: premiumWhiteBouquet,
    tag: "Wedding",
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
    tag: "Sympathy",
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
    price: "$73",
    priceNum: 73,
    image: safiBouquet,
    tag: "Exotic",
    description: "Unique tropical blooms in signature Safi arrangement for exotic beauty.",
    details: [
      "Tropical signature mix",
      "Exotic presentation",
      "Ceramic pot option",
      "Extended vase life",
    ],
    sizes: [
      { label: "Standard", price: "$73" },
      { label: "Deluxe", price: "$107" },
      { label: "Grand", price: "$150" },
    ],
  },
  {
    id: "signature-bouquet",
    name: "Signature Bouquet",
    price: "$96",
    priceNum: 96,
    image: signatureBouquet,
    tag: "Best Seller",
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
    id: "tana-bouquet",
    name: "Tana Bouquet",
    price: "$79",
    priceNum: 79,
    image: tanaBouquet,
    tag: "Modern",
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
    price: "$91",
    priceNum: 91,
    image: twilightBouquet,
    tag: "Evening",
    description: "Deep purples and blues evoking twilight romance and mystery.",
    details: [
      "Twilight purple palette",
      "Evening romance",
      "Velvet ribbon wrap",
      "Dramatic beauty",
    ],
    sizes: [
      { label: "Standard", price: "$91" },
      { label: "Deluxe", price: "$134" },
      { label: "Grand", price: "$189" },
    ],
  },
  {
    id: "zest-bouquet",
    name: "Zest Bouquet",
    price: "$66",
    priceNum: 66,
    image: zestBouquet,
    tag: "Citrus",
    description: "Zesty orange and yellow tones for cheerful, uplifting energy.",
    details: [
      "Orange & yellow zest",
      "Uplifting colors",
      "Sunny disposition",
      "Perfect cheer gift",
    ],
    sizes: [
      { label: "Standard", price: "$66" },
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
    tag: "Exotic",
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
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const getRelatedProducts = (id: string) =>
  products.filter((p) => p.id !== id).slice(0, 3);
