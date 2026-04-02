export default function SelectItems() {
  return (
    <div className="p-4 max-w-md mx-auto space-y-4">

      <h2 className="text-lg font-semibold">
        What are we cleaning?
      </h2>

      {["Shirt", "Pants", "Towel"].map(item => (
        <div className="flex justify-between bg-white p-4 rounded-xl shadow">
          <span>{item}</span>
          <div className="flex gap-2">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
      ))}

      <button className="w-full bg-blue-600 text-white p-3 rounded-xl">
        Proceed to Payment
      </button>

    </div>
  );
}