import { Bell, Settings } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-white px-6 py-4 flex justify-between items-center border-b">

      <h1 className="font-semibold text-lg">
        Taj Luxe Laundry
      </h1>

      <div className="flex items-center gap-4">

        <Bell size={18} />
        <Settings size={18} />

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
          <div className="text-sm">
            <p className="font-medium">Admin User</p>
            <p className="text-xs text-gray-400">
              Operations Lead
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}