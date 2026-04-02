import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Tracking() {
  const { id } = useParams();
  const nav = useNavigate();

  return (
    <div className="bg-bg min-h-screen p-4 pb-24">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-4">
        <ArrowLeft onClick={() => nav(-1)} />
        <h2 className="text-lg font-semibold">
          Track Order
        </h2>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-3xl p-4 shadow-card mb-4">

        <p className="text-xs text-gray-400">
          ORDER REFERENCE
        </p>

        <div className="flex justify-between items-center mt-1">
          <p className="font-semibold">
            Order #{id}
          </p>

          <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
            IN PROGRESS
          </span>
        </div>

        <p className="text-sm text-gray-400 mt-2">
          Placed today • 09:30 AM
        </p>

        <div className="mt-4 p-3 bg-gray-100 rounded-xl">
          <p className="text-sm text-gray-500">
            Estimated delivery
          </p>
          <p className="font-semibold">
            Today, 6:00 PM
          </p>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="space-y-6 pl-4 border-l-2 border-blue-500">

        <div>
          <p className="font-semibold">
            Request Received
          </p>
          <p className="text-sm text-gray-500">
            Your order has been logged.
          </p>
        </div>

        <div>
          <p className="font-semibold">
            Assigned to Staff
          </p>
          <p className="text-sm text-gray-500">
            Amit Kumar is handling your order.
          </p>
        </div>

        <div>
          <p className="font-semibold text-blue-600">
            In Progress
          </p>
          <p className="text-sm text-gray-500">
            Cleaning & pressing phase.
          </p>
        </div>

        <div className="opacity-40">
          <p className="font-semibold">
            Out for Delivery
          </p>
          <p className="text-sm">
            Scheduled soon.
          </p>
        </div>

      </div>

      {/* SUPPORT BUTTON */}
      <button className="fixed bottom-4 left-4 right-4 bg-[#0B1B34] text-white py-4 rounded-2xl">
        Contact Support
      </button>

    </div>
  );
}