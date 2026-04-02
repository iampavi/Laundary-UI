export default function Card({ title, value, children }) {
  return (
    <div className="bg-white p-5 rounded-3xl shadow-card border border-gray-100">

      {title && (
        <p className="text-sm text-gray-500">{title}</p>
      )}

      {value && (
        <h2 className="text-2xl font-semibold mt-2 text-gray-900">
          {value}
        </h2>
      )}

      {children && <div className="mt-4">{children}</div>}

    </div>
  );
}