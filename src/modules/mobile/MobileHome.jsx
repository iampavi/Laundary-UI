import ServiceCard from "./components/ServiceCard";
import BottomNav from "./components/BottomNav";

export default function MobileHome() {
  return (
    <div className="p-4 pb-20 space-y-4 max-w-md mx-auto">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Hello 👋</h1>
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>

      {/* Search */}
      <input
        placeholder="What to wash today?"
        className="w-full p-3 rounded-xl bg-gray-100 text-sm"
      />

      {/* Services */}
      <div className="grid grid-cols-4 gap-3">
        <ServiceCard icon="🧺" label="Wash" />
        <ServiceCard icon="⚡" label="Quick" />
        <ServiceCard icon="🧼" label="Fold" />
        <ServiceCard icon="👕" label="Iron" />
      </div>

      {/* Active Order */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4 rounded-2xl shadow">
        <p className="font-semibold">Quick Wash</p>
        <p className="text-xs opacity-80">
          Finish today at 17:30
        </p>
      </div>

      <BottomNav />
    </div>
  );
}