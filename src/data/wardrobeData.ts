import itemBlazer from "@/assets/item-blazer.jpg";
import itemSneakers from "@/assets/item-sneakers.jpg";
import itemJeans from "@/assets/item-jeans.jpg";
import itemTshirt from "@/assets/item-tshirt.jpg";
import itemWatch from "@/assets/item-watch.jpg";
import itemHoodie from "@/assets/item-hoodie.jpg";

export type ClothingCategory = "tops" | "bottoms" | "shoes" | "accessories" | "outerwear";

export interface WardrobeItem {
  id: string;
  name: string;
  category: ClothingCategory;
  color: string;
  colorHex: string;
  brand: string;
  image: string;
  matchScore?: number;
  tags: string[];
}

export const wardrobeItems: WardrobeItem[] = [
  {
    id: "1",
    name: "Navy Blazer",
    category: "outerwear",
    color: "Navy",
    colorHex: "#1B2A4A",
    brand: "Hugo Boss",
    image: itemBlazer,
    tags: ["formal", "work", "evening"],
  },
  {
    id: "2",
    name: "White Sneakers",
    category: "shoes",
    color: "White",
    colorHex: "#F5F5F0",
    brand: "Common Projects",
    image: itemSneakers,
    tags: ["casual", "street", "daily"],
  },
  {
    id: "3",
    name: "Dark Slim Jeans",
    category: "bottoms",
    color: "Dark Indigo",
    colorHex: "#1A1A2E",
    brand: "Levi's",
    image: itemJeans,
    tags: ["casual", "daily", "versatile"],
  },
  {
    id: "4",
    name: "Cream Premium Tee",
    category: "tops",
    color: "Cream",
    colorHex: "#F5E6CC",
    brand: "COS",
    image: itemTshirt,
    tags: ["casual", "minimal", "daily"],
  },
  {
    id: "5",
    name: "Gold Chronograph",
    category: "accessories",
    color: "Gold",
    colorHex: "#C8A45C",
    brand: "Seiko",
    image: itemWatch,
    tags: ["formal", "evening", "luxury"],
  },
  {
    id: "6",
    name: "Burgundy Hoodie",
    category: "outerwear",
    color: "Burgundy",
    colorHex: "#800020",
    brand: "Nike",
    image: itemHoodie,
    tags: ["casual", "street", "sport"],
  },
];

export const categories: { key: ClothingCategory; label: string; icon: string }[] = [
  { key: "tops", label: "Tops", icon: "👕" },
  { key: "bottoms", label: "Bottoms", icon: "👖" },
  { key: "outerwear", label: "Outerwear", icon: "🧥" },
  { key: "shoes", label: "Shoes", icon: "👟" },
  { key: "accessories", label: "Accessories", icon: "⌚" },
];

export interface UserProfile {
  name: string;
  gender: "male" | "female" | "non-binary";
  height: string;
  weight: string;
  skinTone: string;
  totalItems: number;
  outfitsMade: number;
  styleScore: number;
}

export const mockUser: UserProfile = {
  name: "Alex Rivera",
  gender: "male",
  height: "5'11\"",
  weight: "165 lbs",
  skinTone: "Medium Warm",
  totalItems: 47,
  outfitsMade: 23,
  styleScore: 87,
};
