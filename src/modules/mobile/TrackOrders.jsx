import { useNavigate } from "react-router-dom";

const orders = [
  { id: 1, name: "Quick Wash", status: "In Progress" },
  { id: 2, name: "Dry Clean", status: "Completed" },
];

export default function TrackOrders() {
  const navigate = useNavigate();

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">

      <h2 className="font-semibold">My Orders</h2>

      {orders.map((o) => (
        <div
          key={o.id}
          onClick={() => navigate(`/track/${o.id}`)}
          className="bg-white p-4 rounded-xl shadow-sm cursor-pointer"
        >
          <p className="font-medium">{o.name}</p>
          <p className="text-sm text-gray-500">{o.status}</p>
        </div>
      ))}

    </div>
  );
}