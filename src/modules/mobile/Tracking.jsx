import { useParams } from "react-router-dom";

export default function Tracking() {
  const { id } = useParams();

  const steps = [
    "Order Placed",
    "Picked Up",
    "Washing",
    "Delivered",
  ];

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">

      <h2 className="font-semibold">Order #{id}</h2>

      {steps.map((s, i) => (
        <div className="flex items-center gap-3" key={i}>
          <div className="w-3 h-3 bg-blue-600 rounded-full" />
          <p>{s}</p>
        </div>
      ))}

    </div>
  );
}