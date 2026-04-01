export default function Button({ children, variant = "primary" }) {
  const styles = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200",
  };

  return (
    <button className={`px-4 py-2 rounded-lg ${styles[variant]}`}>
      {children}
    </button>
  );
}