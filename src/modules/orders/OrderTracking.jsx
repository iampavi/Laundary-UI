import { useEffect, useState } from "react";
import { getTracking } from "../../mock/api";

export default function OrderTracking() {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    getTracking().then(setSteps);
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow">

      <h2 className="font-semibold mb-4">Track Order</h2>

      <div className="space-y-4">
        {steps.map((s, i) => (
          <div className="flex gap-3 items-start" key={i}>
            <div
              className={`w-4 h-4 rounded-full mt-1 ${
                s.done ? "bg-blue-600" : "bg-gray-300"
              }`}
            />

            <div>
              <p className="font-medium">{s.step}</p>
              <p className="text-sm text-gray-500">{s.time}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}