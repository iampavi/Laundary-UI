export default function Progress({ value }) {
  return (
    <div className="bg-gray-200 h-2 rounded-full">
      <div
        className="bg-blue-600 h-2 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}