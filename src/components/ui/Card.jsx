export default function Card({ title, value, children }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition">
      {title && (
        <p className="text-gray-500 text-sm font-medium">{title}</p>
      )}

      {value && (
        <h2 className="text-2xl font-bold mt-2 text-gray-900">
          {value}
        </h2>
      )}

      {children}
    </div>
  );
}