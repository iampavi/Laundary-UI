import { categories } from "../mobile/data/items";
import { services } from "../mobile/data/services";
import { useState } from "react";
import BottomNav from "./components/BottomNav";
import { useNavigate } from "react-router-dom";

export default function LaundryShop() {
  const [cart, setCart] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  const nav = useNavigate();

  // update qty
  const updateQty = (item, delta) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev
          .map((i) =>
            i.id === item.id
              ? { ...i, qty: Math.max(0, i.qty + delta) }
              : i
          )
          .filter((i) => i.qty > 0);
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  // total
  const total = cart.reduce((sum, item) => {
    if (!selectedService) return sum;
    return (
      sum +
      item.price *
        item.qty *
        selectedService.priceMultiplier
    );
  }, 0);

  return (
    <div className="bg-bg min-h-screen pb-40 px-4">

      {/* HEADER */}
      <h2 className="text-lg font-semibold mb-4 mt-4">
        Select Items
      </h2>

      {/* ITEMS */}
      {categories.map((cat) => {
        const Icon = cat.icon; // ✅ FIXED

        return (
          <div key={cat.name} className="mb-5">

            {/* CATEGORY TITLE */}
            <h3 className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-2">
              {Icon && <Icon size={16} />}
              {cat.name}
            </h3>

            {/* ITEMS LIST */}
            <div className="bg-white rounded-3xl shadow-card p-3">

              {cat.items.map((item) => {
                const found = cart.find((i) => i.id === item.id);

                return (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-3 border-b last:border-none"
                  >

                    {/* LEFT */}
                    <div>
                      <p className="font-medium text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        ₹{item.price}
                      </p>
                    </div>

                    {/* STEPPER */}
                    <div className="flex items-center bg-gray-100 rounded-full px-2 py-1 gap-3">

                      <button
                        onClick={() => updateQty(item, -1)}
                        className="w-8 h-8 bg-white rounded-full"
                      >
                        -
                      </button>

                      <span className="text-sm font-medium">
                        {found?.qty || 0}
                      </span>

                      <button
                        onClick={() => updateQty(item, 1)}
                        className="w-8 h-8 bg-[#0B1B34] text-white rounded-full"
                      >
                        +
                      </button>

                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        );
      })}

      {/* SELECTED ITEMS */}
      {cart.length > 0 && (
        <div className="bg-white rounded-3xl p-4 shadow-card mb-4">

          <h3 className="font-medium mb-2">
            Selected Items
          </h3>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-sm"
            >
              <span>
                {item.name} x{item.qty}
              </span>
              <span>
                ₹{item.price * item.qty}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* SERVICE */}
      {cart.length > 0 && (
        <div className="bg-white rounded-3xl p-4 shadow-card mb-6">

          <h3 className="font-medium mb-3">
            Choose Service
          </h3>

          <div className="grid grid-cols-2 gap-3">

            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedService(s)}
                className={`p-3 rounded-2xl text-sm transition ${
                  selectedService?.id === s.id
                    ? "bg-[#0B1B34] text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {s.name}
              </button>
            ))}

          </div>
        </div>
      )}

      {/* BOTTOM BAR */}
      {cart.length > 0 && selectedService && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t p-4 rounded-t-3xl shadow-card">

          <div className="flex justify-between mb-3 font-semibold text-gray-800">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={() =>
              nav("/checkout", {
                state: { cart, selectedService, total },
              })
            }
            className="w-full bg-[#0B1B34] text-white py-4 rounded-2xl"
          >
            Proceed to Payment →
          </button>

        </div>
      )}

      <BottomNav />
    </div>
  );
}