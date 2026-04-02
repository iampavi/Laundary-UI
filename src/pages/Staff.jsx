import { Plus, Truck, Shield, User } from "lucide-react";

export default function Staff() {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-2xl font-semibold">
            Staff Directory
          </h2>
          <p className="text-sm text-gray-500">
            Manage housekeeping and laundry operations personnel
          </p>
        </div>

        <button className="bg-[#0B1B34] text-white px-4 py-2 rounded-xl flex items-center gap-2">
          <Plus size={16} /> Add New Staff
        </button>

      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-4 gap-4">

        <StatCard title="TOTAL ACTIVE" value="24" sub="+2 today" />

        <StatMini icon={<User size={16} />} value="14" label="Washers & Ironers" color="blue" />
        <StatMini icon={<Truck size={16} />} value="6" label="Delivery Runners" color="orange" />
        <StatMini icon={<Shield size={16} />} value="4" label="Supervisors" color="purple" />

      </div>

      {/* STAFF GRID */}
      <div className="grid grid-cols-3 gap-4">

        {/* CARD 1 */}
        <div className="bg-white p-4 rounded-3xl">

          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://i.pravatar.cc/100?img=5"
              className="w-12 h-12 rounded-full"
            />

            <div>
              <p className="font-semibold">Anitha</p>

              <div className="flex gap-2 text-xs mt-1">
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  SENIOR
                </span>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  SUPERVISOR
                </span>
              </div>
            </div>

            <span className="ml-auto text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
              ACTIVE
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-2">
            Currently Assigned Rooms:
          </p>

          <div className="flex gap-2 mb-2">
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">402</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">405</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">+2</span>
          </div>

          {/* PROGRESS */}
          <div className="w-full h-1 bg-gray-200 rounded mb-3">
            <div className="w-2/3 h-full bg-blue-500 rounded" />
          </div>

          <p className="text-xs text-gray-400">
            Since 08:00 AM
          </p>

        </div>

        {/* CARD 2 */}
        <div className="bg-white p-4 rounded-3xl">

          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://i.pravatar.cc/100?img=12"
              className="w-12 h-12 rounded-full"
            />

            <div>
              <p className="font-semibold">Rajesh</p>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                MAIN WASHER
              </span>
            </div>

            <span className="ml-auto text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
              ON BREAK
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-2">
            Queue:
          </p>

          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            Batch #104
          </span>

          <div className="w-full h-1 bg-gray-200 rounded mt-3 mb-3">
            <div className="w-1/2 h-full bg-orange-400 rounded" />
          </div>

          <p className="text-xs text-gray-400">
            Resuming in 15m
          </p>

        </div>

        {/* CARD 3 */}
        <div className="bg-white p-4 rounded-3xl">

          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://i.pravatar.cc/100?img=15"
              className="w-12 h-12 rounded-full"
            />

            <div>
              <p className="font-semibold">Sarath</p>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                RUNNER
              </span>
            </div>

            <span className="ml-auto text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
              ACTIVE
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-2">
            Live Deliveries:
          </p>

          <div className="flex gap-2 mb-2">
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">Room 512</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">Room 303</span>
          </div>

          <div className="w-full h-1 bg-gray-200 rounded mb-3">
            <div className="w-3/4 h-full bg-blue-500 rounded" />
          </div>

          <p className="text-xs text-gray-400">
            In Transit
          </p>

        </div>

        {/* OFF DUTY */}
        <div className="bg-gray-100 p-4 rounded-3xl opacity-70">

          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://i.pravatar.cc/100?img=20"
              className="w-12 h-12 rounded-full grayscale"
            />

            <div>
              <p className="font-semibold">Dhanesh</p>
              <span className="text-xs text-gray-400">
                DELIVERY LEAD
              </span>
            </div>

            <span className="ml-auto text-xs bg-gray-200 text-gray-500 px-2 py-1 rounded-full">
              OFF-DUTY
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-2">
            Shift ended 2h ago
          </p>

          <p className="text-xs text-gray-400">
            Starts Tomorrow 09:00
          </p>

        </div>

      </div>

    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function StatCard({ title, value, sub }) {
  return (
    <div className="bg-white p-4 rounded-2xl">
      <p className="text-xs text-gray-400">{title}</p>
      <h2 className="text-2xl font-semibold">{value}</h2>
      <p className="text-xs text-green-500">{sub}</p>
    </div>
  );
}

function StatMini({ icon, value, label, color }) {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    orange: "bg-orange-100 text-orange-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <div className="bg-white p-4 rounded-2xl flex items-center gap-3">

      <div className={`p-2 rounded-lg ${colors[color]}`}>
        {icon}
      </div>

      <div>
        <p className="font-semibold">{value}</p>
        <p className="text-xs text-gray-400">{label}</p>
      </div>

    </div>
  );
}