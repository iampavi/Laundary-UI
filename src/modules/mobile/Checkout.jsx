import { useStore } from "../../app/store";

export default function Checkout() {
  const { cart } = useStore();

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">

      <h2 className="font-semibold">Checkout</h2>

      {/* Cart Items */}
      <div className="space-y-2">
        {cart.map((item, i) => (
          <div
            key={i}
            className="flex justify-between bg-white p-3 rounded-xl shadow-sm"
          >
            <div className="flex gap-2 items-center">
              <img src={item.image} className="w-10 h-10" />
              <span>{item.name}</span>
            </div>
            <span>₹{item.price}</span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>
          ₹{cart.reduce((a, b) => a + b.price, 0)}
        </span>
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
        Place Order
      </button>

    </div>
  );
}