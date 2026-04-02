import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { state } = useLocation();
  const nav = useNavigate();
  const { cart, selectedService, total } = state || {};

  return (
    <div className="p-4 bg-bg min-h-screen">

      <h2 className="font-semibold mb-4">Checkout</h2>

      <div className="bg-white rounded-3xl p-4 shadow-card">

        <p className="mb-2 font-medium">
          Service: {selectedService?.name}
        </p>

        {cart?.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>{item.name} x{item.qty}</span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}

      </div>

      <div className="mt-4 flex justify-between font-semibold">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

     <button
  onClick={() => nav("/success")}
  className="mt-4 w-full bg-[#0B1B34] text-white py-3 rounded-2xl"
>
  Pay Now
</button>

    </div>
  );
}