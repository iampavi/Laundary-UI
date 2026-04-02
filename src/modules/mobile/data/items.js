import { Shirt, Briefcase, Sparkles } from "lucide-react";

export const categories = [
  {
    name: "Popular",
    icon: Sparkles,
    items: [
      { id: 1, name: "Shirt", price: 150 },
      { id: 2, name: "Pants", price: 200 },
      { id: 3, name: "Towel", price: 80 },
    ],
  }, // ✅ COMMA HERE

  {
    name: "Casual",
    icon: Shirt,
    items: [
      { id: 6, name: "T-Shirt", price: 120 },
      { id: 7, name: "Jeans", price: 250 },
      { id: 8, name: "Shorts", price: 100 },
    ],
  }, // ✅ COMMA HERE

  {
    name: "Business",
    icon: Briefcase,
    items: [
      { id: 4, name: "Suit", price: 500 },
      { id: 5, name: "Blazer", price: 350 },
    ],
  }, // optional last comma
];