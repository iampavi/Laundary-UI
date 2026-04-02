import { Bell, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-8">

      <h2 className="text-lg font-semibold text-gray-800">
        Taj Luxe Laundry
      </h2>

      <div className="flex items-center gap-4">

        <button
          onClick={() => alert("Notifications")}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <Bell size={20} />
        </button>

        <button
          onClick={() => alert("Settings")}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <Settings size={20} />
        </button>

        <div className="w-9 h-9 bg-gray-300 rounded-full cursor-pointer" />

      </div>

    </header>
  );
}