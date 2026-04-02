import {
  LayoutDashboard,
  Activity,
  Users,
  DollarSign,
  BarChart,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const menu = [
    { name: "Overview", icon: LayoutDashboard, path: "/" },
    { name: "Live Requests", icon: Activity, path: "/admin/orders" },
    { name: "Housekeeping", icon: Users, path: "/staff" },
    { name: "Pricing", icon: DollarSign, path: "/pricing" },
    { name: "Analytics", icon: BarChart, path: "/analytics" },
  ];

  return (
    <div className="w-64 bg-white border-r p-4 flex flex-col justify-between">

      <div>
        <h2 className="text-lg font-semibold mb-6">
          Taj Operations
          <p className="text-xs text-gray-400">Admin Console</p>
        </h2>

        {menu.map((m) => {
          const Icon = m.icon;

          return (
            <Link
              key={m.name}
              to={m.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl mb-2 ${
                pathname === m.path
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              <Icon size={18} />
              {m.name}
            </Link>
          );
        })}
      </div>

      <div className="text-gray-500 text-sm flex items-center gap-2">
        <LogOut size={16} />
        Logout
      </div>
    </div>
  );
}