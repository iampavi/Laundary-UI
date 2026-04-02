import { useState } from "react";

export default function Orders() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(null);

  const orders = [
    {
      room: "204",
      name: "John Doe",
      items: ["3 Shirts", "2 Pants"],
      status: "pending",
      payment: "paid",
      urgent: true,
    },
    {
      room: "301",
      name: "Sarah Miller",
      items: ["1 Suit"],
      status: "in_progress",
      payment: "pending",
      urgent: false,
    },
    {
      room: "505",
      name: "Robert King",
      items: ["5 Underwear", "4 Socks"],
      status: "completed",
      payment: "paid",
      urgent: false,
    },
  ];

  const filtered =
    statusFilter === "all"
      ? orders
      : orders.filter((o) => o.status === statusFilter);

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">
            Live Laundry Requests
          </h2>
          <p className="text-sm text-gray-500">
            Real-time management of active guest laundry cycles.
          </p>
        </div>

        {/* STATS */}
        <div className="flex gap-3">
          <StatBox title="IN QUEUE" value="12" />
          <StatBox title="ACTIVE" value="08" />
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex justify-between items-center">

        <div className="flex gap-3">

          {/* STATUS FILTER */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "status" ? null : "status")
              }
              className="bg-gray-100 px-4 py-2 rounded-xl text-sm"
            >
              Status: {statusFilter}
            </button>

            {openDropdown === "status" && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-xl p-2 w-40 z-10">
                {["all", "pending", "in_progress", "completed"].map((s) => (
                  <div
                    key={s}
                    onClick={() => {
                      setStatusFilter(s);
                      setOpenDropdown(null);
                    }}
                    className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer text-sm"
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* FLOOR FILTER (UI only for now) */}
          <button className="bg-gray-100 px-4 py-2 rounded-xl text-sm">
            Floor: All Floors
          </button>

        </div>

        <button className="bg-[#0B1B34] text-white px-4 py-2 rounded-xl">
          + New Request
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl p-4">

        <table className="w-full text-sm">

          <thead className="text-gray-400 text-left">
            <tr>
              <th>Room</th>
              <th>Guest</th>
              <th>Items</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filtered.map((o, i) => (
              <tr key={i} className="border-t">

                {/* ROOM */}
                <td className="py-4 font-semibold">{o.room}</td>

                {/* GUEST */}
                <td>
                  <div>
                    <p className="font-medium">{o.name}</p>
                    <p className="text-xs text-gray-400">
                      {o.urgent && (
                        <span className="text-red-500 font-medium">
                          URGENT
                        </span>
                      )}
                    </p>
                  </div>
                </td>

                {/* ITEMS */}
                <td>
                  {o.items.map((it, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 px-2 py-1 rounded mr-1 text-xs"
                    >
                      {it}
                    </span>
                  ))}
                </td>

                {/* STATUS */}
                <td>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      o.status === "pending"
                        ? "bg-orange-100 text-orange-600"
                        : o.status === "in_progress"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {o.status}
                  </span>
                </td>

                {/* PAYMENT */}
                <td>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      o.payment === "paid"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {o.payment}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="flex gap-2 py-4">

                  {o.status === "pending" && (
                    <>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-lg">
                        Accept
                      </button>
                      <button className="bg-gray-200 px-3 py-1 rounded-lg">
                        Assign Staff
                      </button>
                    </>
                  )}

                  {o.status === "in_progress" && (
                    <button className="bg-[#0B1B34] text-white px-3 py-1 rounded-lg">
                      Update Status
                    </button>
                  )}

                  {o.status === "completed" && (
                    <>
                      <button className="bg-green-600 text-white px-3 py-1 rounded-lg">
                        Deliver Now
                      </button>
                      <button className="bg-gray-200 px-3 py-1 rounded-lg">
                        Update
                      </button>
                    </>
                  )}

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* BOTTOM STATS */}
      <div className="grid grid-cols-3 gap-4">

        <StatCard
          title="Average Delivery Time"
          value="3.2 Hours"
          sub="+12% vs yesterday"
        />

        <StatCard
          title="Urgent Requests"
          value="4 Items"
          sub="Critical"
          danger
        />

        <StatCard
          title="Daily Revenue"
          value="$1,240.50"
          sub="Target Reached"
        />

      </div>

    </div>
  );
}

function StatBox({ title, value }) {
  return (
    <div className="bg-white px-4 py-3 rounded-xl text-center">
      <p className="text-xs text-gray-400">{title}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

function StatCard({ title, value, sub, danger }) {
  return (
    <div className="bg-white p-4 rounded-2xl">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-xl font-semibold">{value}</h2>
      <p
        className={`text-xs ${
          danger ? "text-red-500" : "text-green-500"
        }`}
      >
        {sub}
      </p>
    </div>
  );
}