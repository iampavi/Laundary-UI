export default function Payment() {
  return (
    <div className="p-4 max-w-md mx-auto space-y-4">

      <h2 className="text-lg font-semibold">Payment</h2>

      <div className="bg-white p-4 rounded-xl shadow">
        Total Amount: ₹500
      </div>

      <div className="space-y-3">
        <div className="p-3 border rounded-xl">UPI</div>
        <div className="p-3 border rounded-xl">Card</div>
        <div className="p-3 border rounded-xl">Room Bill</div>
      </div>

      <button className="w-full bg-blue-600 text-white p-3 rounded-xl">
        Pay Now
      </button>

    </div>
  );
}