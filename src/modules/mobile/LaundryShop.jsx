import ProductCard from "./components/ProductCard";
import BottomNav from "./components/BottomNav";

const items = [
  { name: "T-Shirt", price: 200 },
  { name: "Shirt", price: 250 },
  { name: "Jacket", price: 500 },
  { name: "Jeans", price: 300 },
];

export default function LaundryShop() {
  return (
    <div className="p-4 pb-20 max-w-md mx-auto">

      <h2 className="font-semibold mb-4">Laundry Items</h2>

      <div className="grid grid-cols-2 gap-4">
        {items.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>

      <BottomNav />
    </div>
  );
}