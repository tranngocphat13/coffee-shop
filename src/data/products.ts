export interface Product {
  id: string;
  name: string;
  origin: string;
  region: string;
  roastLevel: "Light" | "Medium" | "Medium-Dark" | "Dark";
  flavor: string;
  price: number;
  weight: string;
  color: string; // Hex color for 3D package
  badge?: string;
}

export const products: Product[] = [
  {
    id: "ethiopia-yirgacheffe",
    name: "Ethiopia Yirgacheffe",
    origin: "Ethiopia",
    region: "Gedeo Zone, Yirgacheffe",
    roastLevel: "Light",
    flavor: "Floral, citrus, bergamot with a silky body",
    price: 22.0,
    weight: "250g",
    color: "#C4956A",
    badge: "Best Seller",
  },
  {
    id: "colombia-huila",
    name: "Colombia Huila",
    origin: "Colombia",
    region: "Huila Department",
    roastLevel: "Medium",
    flavor: "Caramel, red apple, milk chocolate finish",
    price: 19.5,
    weight: "250g",
    color: "#A67B5B",
  },
  {
    id: "guatemala-antigua",
    name: "Guatemala Antigua",
    origin: "Guatemala",
    region: "Antigua Valley",
    roastLevel: "Medium-Dark",
    flavor: "Dark chocolate, smoky, spiced orange peel",
    price: 21.0,
    weight: "250g",
    color: "#8B6243",
    badge: "New Arrival",
  },
  {
    id: "kenya-aa",
    name: "Kenya AA Nyeri",
    origin: "Kenya",
    region: "Nyeri County",
    roastLevel: "Light",
    flavor: "Blackcurrant, grapefruit, brown sugar sweetness",
    price: 24.0,
    weight: "250g",
    color: "#6B4226",
  },
];
