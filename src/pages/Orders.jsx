import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

export default function Orders() {
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
            <th>Items</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          <tr className="hover:bg-gray-50">
            <td>204</td>
            <td>John Doe</td>
            <td>3 Shirts</td>
            <td><Badge type="warning">Pending</Badge></td>
            <td><Badge type="success">Paid</Badge></td>
            <td className="flex gap-2 py-2">
              <Button>Accept</Button>
              <Button variant="secondary">Assign</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}