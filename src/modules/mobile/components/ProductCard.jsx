import { useStore } from "../../../app/store";

export default function ProductCard({ item }) {
  const { addToCart } = useStore();

  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm">

      {/* Image */}
      <img
        src={item.image}
        className="h-28 w-full object-contain mb-2"
      />

      <p className="font-medium text-sm">{item.name}</p>
      <p className="text-xs text-gray-500">₹{item.price}</p>

      <button
        onClick={() => addToCart(item)}
        className="mt-2 w-full bg-blue-600 text-white py-1 rounded-lg text-sm"
      >
        Add
      </button>

    </div>
  );
}