import { NavLink } from "react-router-dom";
import { LayoutDashboard, ClipboardList, Users, BarChart3 } from "lucide-react";

const menu = [
  { name: "Overview", path: "/", icon: LayoutDashboard },
  { name: "Live Requests", path: "/orders", icon: ClipboardList },
  { name: "Housekeeping", path: "/staff", icon: Users },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r p-5 flex flex-col">
      <h1 className="text-xl font-bold mb-8">Taj Operations</h1>

      <nav className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}