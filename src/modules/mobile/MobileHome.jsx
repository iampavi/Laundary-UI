import { Bell, Settings, Clock, Shirt } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import { orders } from "./data/orders";
import { useNavigate } from "react-router-dom";

export default function MobileHome() {
  const user = {
    name: "Mr. Suvraj",
    room: "204",
  };
  

const nav = useNavigate();

// latest 2 orders
const recentOrders = orders.slice(0, 2);

  return (
    <div className="bg-bg min-h-screen pb-28 font-sans">

      {/* HEADER */}
      <div className="flex justify-between items-center px-4 pt-6 pb-4">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="font-semibold text-lg">Taj Luxe Laundry</h1>
        </div>

        <div className="flex gap-3">
          <button className="p-2 bg-white rounded-xl shadow-soft">
            <Bell size={18} />
          </button>
          <button className="p-2 bg-white rounded-xl shadow-soft">
            <Settings size={18} />
          </button>
        </div>
      </div>

      {/* GREETING */}
      <div className="px-4 mb-5">
        <p className="text-sm text-muted">
          Room Number: <span className="font-medium">{user.room}</span>
        </p>
        <h2 className="text-2xl font-semibold leading-snug mt-1">
          Good morning, <br /> {user.name}
        </h2>
      </div>

      {/* REQUEST LAUNDRY CARD */}
      <div className="px-4 mb-5">
        <Link to="/shop">
          <div className="bg-[#0B1B34] text-white rounded-3xl p-5 shadow-card relative overflow-hidden">

            {/* Icon */}
            <div className="mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Shirt size={18} />
              </div>
            </div>

            {/* Text */}
            <h3 className="text-lg font-semibold">
              Request Laundry Service
            </h3>
            <p className="text-sm text-gray-300">
              Place a new order for washing or dry cleaning
            </p>

           {/* PREMIUM SHAPES (🔥 instead of image) */}
  <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
  <div className="absolute right-10 bottom-10 w-16 h-16 bg-white/10 rounded-xl rotate-12" />

          </div>
        </Link>
      </div>

      {/* TRACK ORDERS */}
      <div className="px-4 mb-6">
        <Link to="/track">
          <div className="bg-white rounded-3xl p-4 shadow-card flex justify-between items-center hover:scale-[1.01] transition">

            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Clock size={18} />
              </div>

              <div>
                <p className="font-medium">Track Active Orders</p>
                <p className="text-xs text-muted">
                  Check real-time status of your garments
                </p>
              </div>
            </div>

            <span className="text-gray-400 text-xl">›</span>
          </div>
        </Link>
      </div>

    {/* RECENT ORDERS */}
<div className="px-4 mb-6">

  <div className="flex justify-between mb-3">
    <h3 className="font-semibold">Recent Order Summary</h3>

    <button
      onClick={() => nav("/track")}
      className="text-sm text-blue-500"
    >
      View All
    </button>
  </div>

  {recentOrders.length === 0 ? (
    <div className="border-2 border-dashed rounded-3xl p-6 text-center bg-white">

      <p className="font-medium text-gray-500">
        No active orders
      </p>
      <p className="text-sm text-gray-400">
        Your fresh clothes are just a request away
      </p>

    </div>
  ) : (
    <div className="space-y-3">

      {recentOrders.map((order) => (
        <div
          key={order.id}
          onClick={() => nav(`/track/${order.id}`)}
          className="bg-white rounded-2xl p-4 shadow-card flex justify-between items-center cursor-pointer"
        >

          {/* LEFT */}
          <div>
            <p className="font-medium text-sm">
              #{order.id}
            </p>

            <p className="text-xs text-gray-400">
              {order.items} items • ₹{order.total}
            </p>
          </div>

          {/* STATUS */}
          <span
            className={`text-xs px-3 py-1 rounded-full ${
              order.status === "completed"
                ? "bg-gray-200 text-gray-600"
                : "bg-[#0B1B34] text-white"
            }`}
          >
            {order.status === "completed"
              ? "DONE"
              : "ACTIVE"}
          </span>

        </div>
      ))}

    </div>
  )}
</div>

      {/* LUXE BENEFITS (SCROLLABLE 🔥) */}
      <div className="px-4 mb-6">
        <h3 className="font-semibold mb-3">Luxe Benefits</h3>

        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">

          {/* CARD 1 */}
          <div className="min-w-[160px] bg-white rounded-3xl shadow-card overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
              className="h-28 w-full object-cover"
            />
            <div className="p-3">
              <p className="text-xs text-blue-500 font-medium">
                SAME DAY
              </p>
              <p className="font-medium text-sm">
                Express Finishing
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="min-w-[160px] bg-white rounded-3xl shadow-card overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1"
              className="h-28 w-full object-cover"
            />
            <div className="p-3">
              <p className="text-xs text-blue-500 font-medium">
                ECO-CARE
              </p>
              <p className="font-medium text-sm">
                Organic Solvents
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="min-w-[160px] bg-white rounded-3xl shadow-card overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac"
              className="h-28 w-full object-cover"
            />
            <div className="p-3">
              <p className="text-xs text-blue-500 font-medium">
                PREMIUM
              </p>
              <p className="font-medium text-sm">
                Fabric Care
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM NAV (FIXED) */}
      <BottomNav />

    </div>
  );
}