export default function Button({ children, variant = "primary" }) {
  const styles = {
    primary:
      "bg-accent text-white shadow-soft hover:scale-[1.02] active:scale-95",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200",
  };

  return (
    <button
      className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}