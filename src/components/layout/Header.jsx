import { Bell, Settings } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-white px-6 py-4 border-b flex justify-between items-center">
      <h2 className="font-semibold text-lg">Taj Luxe Laundry</h2>

      <div className="flex items-center gap-4">
        <Bell />
        <Settings />
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}