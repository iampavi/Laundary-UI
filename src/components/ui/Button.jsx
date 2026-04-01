export default function Button({ children, variant = "primary" }) {
  const styles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow hover:opacity-90",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200",
  };

  return (
    <button
      className={`px-4 py-2 rounded-xl text-sm font-medium transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}