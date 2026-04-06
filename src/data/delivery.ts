export interface DeliveryZone {
  id: number;
  name: string;
  price: number;
  eta: string;
  areas: string[];
}

export const deliveryZones: DeliveryZone[] = [
  {
    id: 1,
    name: "Nairobi CBD",
    price: 0,
    eta: "30 min",
    areas: ["CBD", "Upper Hill", "Parklands"]
  },
  {
    id: 2,
    name: "Inner Suburbs",
    price: 150,
    eta: "45-60 min",
    areas: ["Westlands", "Kilimani", "Kileleshwa", "Lavington"]
  },
  {
    id: 3,
    name: "Outer Suburbs",
    price: 250,
    eta: "1.5-2 hours",
    areas: ["Embakasi", "Rongai", "Ruiru", "Ongata Rongai"]
  },
  {
    id: 4,
    name: "Nearby Towns",
    price: 400,
    eta: "2-3 hours",
    areas: ["Thika", "Limuru", "Kikuyu"]
  }
];
