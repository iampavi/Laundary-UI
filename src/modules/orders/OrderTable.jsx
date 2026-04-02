import { useEffect } from "react";
import { useStore } from "../../app/store";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";

export default function OrderTable() {
  const { orders, loadOrders } = useStore();

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">

      <h2 className="mb-4 font-semibold">Live Orders</h2>

      <table className="w-full">
        <thead className="text-gray-400">
          <tr>
            <th>Room</th>
            <th>Guest</th>
            <th>Status</th>
            <th>Payment</th>
            <th></th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {orders.map((o, i) => (
            <tr key={i}>
              <td>{o.room}</td>
              <td>{o.guest}</td>

              <td>
                <Badge type="warning">{o.status}</Badge>
              </td>

              <td>
                <Badge type="success">{o.payment}</Badge>
              </td>

              <td>
                <Button>View</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}