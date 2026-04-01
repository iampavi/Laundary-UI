export default function Badge({ children, type = "default" }) {
  const styles = {
    success: "bg-green-100 text-green-600",
    warning: "bg-yellow-100 text-yellow-600",
    info: "bg-blue-100 text-blue-600",
    default: "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={`flex items-center gap-1 px-3 py-1 text-xs rounded-full ${styles[type]}`}
    >
      <span className="w-2 h-2 rounded-full bg-current"></span>
      {children}
    </span>
  );
}