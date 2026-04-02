import { useEffect } from "react";
import { useStore } from "../app/store";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

export default function Orders() {
  const { orders, loadOrders, changeStatus, loading } = useStore();

  useEffect(() => {
    loadOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">

      <h2 className="text-lg font-semibold mb-4">
        Live Laundry Requests
      </h2>

      <table className="w-full text-sm">

        <thead className="text-gray-400">
          <tr>
            <th className="text-left py-3">Room</th>
            <th>Guest</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y">

          {orders.map((o) => (
            <tr key={o.id} className="hover:bg-gray-50">

              <td>{o.room}</td>
              <td>{o.guest}</td>

              <td>
                <Badge type="warning">{o.status}</Badge>
              </td>

              <td>
                <Badge type="success">{o.payment || "Pending"}</Badge>
              </td>

              <td>
                <div className="flex gap-2">
                  <Button
                    onClick={() => changeStatus(o.id, "Accepted")}
                  >
                    Accept
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={() =>
                      changeStatus(o.id, "In Progress")
                    }
                  >
                    Start
                  </Button>
                </div>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}