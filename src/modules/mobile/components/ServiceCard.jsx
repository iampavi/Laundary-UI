export default function ServiceCard({ icon, label }) {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm flex flex-col items-center gap-1 hover:shadow-md transition">
      <div className="text-2xl">{icon}</div>
      <p className="text-xs text-gray-600">{label}</p>
    </div>
  );
}