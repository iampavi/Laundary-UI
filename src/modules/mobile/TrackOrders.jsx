import { useState } from "react";
import { orders } from "./data/orders";
import BottomNav from "./components/BottomNav";
import { useNavigate } from "react-router-dom";

export default function TrackOrders() {
  const [tab, setTab] = useState("all");
  const nav = useNavigate();

  const filtered =
    tab === "all"
      ? orders
      : orders.filter((o) =>
          tab === "active"
            ? o.status === "in_progress"
            : o.status === "completed"
        );

  return (
    <div className="bg-bg min-h-screen p-4 pb-28">

      {/* HEADER */}
      <h2 className="text-xl font-semibold mb-4">
        Order History
      </h2>

      {/* STATS */}
      <div className="mb-4">
        <p className="text-xs text-gray-400">YOUR JOURNEY</p>
        <h1 className="text-3xl font-bold">24</h1>
        <p className="text-gray-500">Orders completed</p>
      </div>

      {/* TABS */}
      <div className="flex bg-gray-100 rounded-2xl p-1 mb-4">
        {["all", "active", "completed"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 rounded-xl text-sm ${
              tab === t
                ? "bg-white shadow font-medium"
                : "text-gray-500"
            }`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {filtered.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-3xl p-4 shadow-card"
          >

            {/* TOP */}
            <div className="flex justify-between mb-2">
              <p className="font-semibold">
                #{order.id}
              </p>

              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  order.status === "completed"
                    ? "bg-gray-200 text-gray-600"
                    : "bg-[#0B1B34] text-white"
                }`}
              >
                {order.status === "completed"
                  ? "COMPLETED"
                  : "WASHING"}
              </span>
            </div>

            <p className="text-sm text-gray-400 mb-3">
              {order.date} • {order.items} items
            </p>

            {/* PROGRESS */}
            {order.status === "in_progress" && (
              <div className="flex gap-2 mb-3">
                <div className="h-2 bg-blue-500 rounded w-1/3" />
                <div className="h-2 bg-blue-900 rounded w-1/3" />
                <div className="h-2 bg-gray-200 rounded w-1/3" />
              </div>
            )}

            {/* FOOTER */}
            <div className="flex justify-between items-center mt-3">
              <p className="font-semibold">
                ₹{order.total}
              </p>

              <button
                onClick={() =>
                  nav(`/track/${order.id}`)
                }
                className="text-blue-600 text-sm"
              >
                {order.status === "completed"
                  ? "View Details →"
                  : "Track Order →"}
              </button>
            </div>

          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}