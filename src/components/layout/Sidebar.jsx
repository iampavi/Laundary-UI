import { NavLink } from "react-router-dom";
import { LayoutDashboard, ClipboardList, Users, BarChart3 } from "lucide-react";
import { Hotel } from "lucide-react";
import { CreditCard } from "lucide-react";

const menu = [
  { name: "Overview", path: "/", icon: LayoutDashboard },
  { name: "Live Requests", path: "/orders", icon: ClipboardList },
  { name: "Housekeeping", path: "/staff", icon: Users },
  { name: "Rooms", path: "/rooms", icon: Hotel },
  { name: "Payments", path: "/payments", icon: CreditCard },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r px-6 py-6 flex flex-col">

      <h1 className="text-xl font-semibold mb-10">
        Taj Operations
      </h1>

      <nav className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

    </aside>
  );
}