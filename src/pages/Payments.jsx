import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

const payments = [
  {
    id: "PAY-1001",
    order: "ORD-8921",
    guest: "John Doe",
    amount: 500,
    method: "UPI",
    status: "Paid",
    date: "01 Apr 2026",
  },
  {
    id: "PAY-1002",
    order: "ORD-8922",
    guest: "Sarah Miller",
    amount: 750,
    method: "Card",
    status: "Pending",
    date: "01 Apr 2026",
  },
  {
    id: "PAY-1003",
    order: "ORD-8923",
    guest: "Robert King",
    amount: 300,
    method: "Room Bill",
    status: "Failed",
    date: "31 Mar 2026",
  },
];

export default function Payments() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Payments</h2>
        <Button>Export Report</Button>
      </div>

      {/* Table */}
      <table className="w-full text-sm">

        <thead className="text-gray-400">
          <tr>
            <th className="text-left py-3">Payment ID</th>
            <th>Order</th>
            <th>Guest</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y">

          {payments.map((p, i) => (
            <tr key={i} className="hover:bg-gray-50 transition">

              <td className="py-3">{p.id}</td>
              <td>{p.order}</td>
              <td>{p.guest}</td>
              <td>₹{p.amount}</td>
              <td>{p.method}</td>

              <td>
                <StatusBadge status={p.status} />
              </td>

              <td>{p.date}</td>

              <td>
                <div className="flex gap-2">
                  <Button variant="secondary">View</Button>
                  {p.status === "Pending" && (
                    <Button>Retry</Button>
                  )}
                </div>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

function StatusBadge({ status }) {
  const type =
    status === "Paid"
      ? "success"
      : status === "Pending"
      ? "warning"
      : "default";

  return <Badge type={type}>{status}</Badge>;
}