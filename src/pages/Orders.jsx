import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

export default function Orders() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Live Laundry Requests</h2>

      <table className="w-full text-sm">
        <thead className="text-gray-500">
          <tr>
            <th className="text-left py-2">Room</th>
            <th>Guest</th>
            <th>Items</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y">
        <tr className="hover:bg-gray-50">
  <td className="py-3 font-medium">204</td>
  <td>John Doe</td>
  <td>
    <span className="bg-gray-100 px-2 py-1 rounded text-xs">3 Shirts</span>
  </td>
  <td>
    <span className="text-yellow-600 font-medium">● Pending</span>
  </td>
  <td>
    <span className="text-green-600 font-medium">● Paid</span>
  </td>
  <td className="space-x-2">
    <button className="bg-blue-600 text-white px-3 py-1 rounded-lg">
      Accept
    </button>
    <button className="bg-gray-200 px-3 py-1 rounded-lg">
      Assign
    </button>
  </td>
</tr>

          <tr>
            <td>301</td>
            <td>Sarah Miller</td>
            <td>1 Suit</td>
            <td><Badge type="info">In Progress</Badge></td>
            <td><Badge type="warning">Pending</Badge></td>
            <td>
              <Button>Update</Button>
            </td>
          </tr>

          <tr>
            <td>505</td>
            <td>Robert King</td>
            <td>5 Items</td>
            <td><Badge type="success">Ready</Badge></td>
            <td><Badge type="success">Paid</Badge></td>
            <td>
              <Button>Deliver</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}