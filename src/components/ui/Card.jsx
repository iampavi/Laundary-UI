export default function Card({ title, value, extra }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
      {extra && <p className="text-green-500 text-sm mt-2">{extra}</p>}
    </div>
  );
}