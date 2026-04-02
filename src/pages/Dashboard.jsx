import { Activity, Clock, Users, Wallet } from "lucide-react";
import { Leaf, Star } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">

      {/* ================= TOP STATS ================= */}
      <div className="grid grid-cols-4 gap-4">

        <Card
          title="Total Requests Today"
          value="45"
          sub="+12% vs yesterday"
          icon={<Activity />}
          color="blue"
        />

        <Card
          title="Pending Orders"
          value="12"
          sub="Avg wait: 45m"
          icon={<Clock />}
          color="orange"
        />

        <Card
          title="Staff on Duty"
          value="8"
          sub="Optimal"
          icon={<Users />}
          color="gray"
        />

        <Card
          title="Today's Revenue"
          value="₹15,400"
          sub="+5.4%"
          icon={<Wallet />}
          color="dark"
        />

      </div>

      {/* ================= CHART + ACTIVITY ================= */}
      <div className="grid grid-cols-3 gap-4">

        {/* CHART */}
        <div className="col-span-2 bg-white rounded-3xl p-6">

          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold">
                Order Volume over 24h
              </h3>
              <p className="text-sm text-gray-400">
                Real-time throughput metrics
              </p>
            </div>

            <div className="flex gap-2 text-xs">
              <span className="bg-gray-200 px-3 py-1 rounded-full">24H</span>
              <span className="px-3 py-1 rounded-full">7D</span>
            </div>
          </div>

          {/* SIMPLE SVG CHART ( instead of placeholder) */}
          <svg viewBox="0 0 300 100" className="w-full h-40">
            <path
              d="M0,70 Q50,50 100,60 T200,40 T300,60"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
            />
          </svg>

        </div>

        {/* LIVE ACTIVITY */}
        <div className="bg-white rounded-3xl p-4">

          <div className="flex justify-between mb-3">
            <h3 className="font-semibold">Live Activity</h3>
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
              LIVE
            </span>
          </div>

          <div className="space-y-3 text-sm">

            <div className="p-3 bg-blue-50 rounded-xl border-l-4 border-blue-500">
              <p className="font-medium">
                New Express Request
              </p>
              <p className="text-xs text-gray-500">
                Suite 402 • 3 items • Urgent
              </p>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl">
              <p className="font-medium">
                Order #8922 Ready
              </p>
              <p className="text-xs text-gray-500">
                Delivered to concierge
              </p>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl">
              <p className="font-medium">
                Laundry Out for Delivery
              </p>
              <p className="text-xs text-gray-500">
                Staff: Rajesh
              </p>
            </div>

          </div>

        </div>

      </div>



{/* ================= BOTTOM SECTION ================= */}
<div className="grid grid-cols-4 gap-4">

  {/* BIG CARD (60-70% space) */}
  <div className="col-span-2 bg-gradient-to-br from-[#0B1B34] to-[#1E3A8A] text-white p-6 rounded-3xl flex justify-between items-center">

    <div>
      <h3 className="text-lg font-semibold mb-2">
        Refill Detergent Stock
      </h3>

      <p className="text-sm text-gray-300 mb-4 max-w-xs">
        Premium Eco-Softener levels are below 15%.
      </p>
    </div>

    {/* CIRCLE */}
    <div className="w-24 h-24 border-4 border-white/20 rounded-full flex items-center justify-center">
      <span className="font-semibold text-lg">15%</span>
    </div>

  </div>

  {/* SMALL CARD - GREEN SCORE */}
  <MiniCard
    title="Green Score"
    value="A+"
    icon={<Leaf size={16} />}
    color="green"
  />

  {/* SMALL CARD - RATING */}
  <MiniCard
    title="Guest Rating"
    value="4.8"
    icon={<Star size={16} />}
    color="yellow"
  />

</div>
    </div>
  );
}

function Card({ title, value, sub, icon, color }) {
  const styles = {
    blue: "bg-blue-50 text-blue-600",
    orange: "bg-orange-50 text-orange-600",
    gray: "bg-gray-100 text-gray-600",
    dark: "bg-[#0B1B34] text-white",
  };

  return (
    <div className="bg-white p-4 rounded-2xl flex justify-between items-center">

      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-xl font-semibold">{value}</h2>
        <p className="text-xs text-green-500">{sub}</p>
      </div>

      <div className={`p-3 rounded-xl ${styles[color]}`}>
        {icon}
      </div>

    </div>
  );
}

function MiniCard({ title, value, icon, color }) {
  const colors = {
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="bg-white p-4 rounded-2xl flex flex-col justify-between">

      {/* ICON */}
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colors[color]}`}>
        {icon}
      </div>

      {/* TEXT */}
      <div>
        <p className="text-xs text-gray-400">{title}</p>
        <h2 className="text-lg font-semibold">{value}</h2>
      </div>

    </div>
  );
}