import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const nav = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg text-center px-6">

      <CheckCircle size={80} className="text-green-500 mb-4" />

      <h2 className="text-xl font-semibold mb-2">
        Payment Successful
      </h2>

      <p className="text-gray-500 mb-6">
        Your laundry request has been placed successfully.
      </p>

      <button
        onClick={() => nav("/track")}
        className="bg-[#0B1B34] text-white px-6 py-3 rounded-2xl"
      >
        Track Order
      </button>

    </div>
  );
}