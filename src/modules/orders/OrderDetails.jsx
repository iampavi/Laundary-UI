import { useParams } from "react-router-dom";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";

const mockOrder = {
  id: "ORD-8921",
  guest: "John Doe",
  room: 204,
  status: "In Progress",
  payment: "Paid",
  staff: "Anisha Kapoor",
  items: [
    { name: "Shirt", qty: 3, price: 150 },
    { name: "Pants", qty: 2, price: 200 },
  ],
  timeline: [
    { step: "Request Received", time: "10:00 AM", done: true },
    { step: "Assigned to Staff", time: "10:15 AM", done: true },
    { step: "In Progress", time: "11:00 AM", done: true },
    { step: "Ready for Delivery", time: "", done: false },
  ],
};

export default function OrderDetails() {
  const { id } = useParams();

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          Order #{id || mockOrder.id}
        </h1>

        <div className="flex gap-2">
          <Button>Mark Ready</Button>
          <Button variant="secondary">Assign Staff</Button>
        </div>
      </div>

      {/* Top Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <InfoCard label="Guest" value={mockOrder.guest} />
        <InfoCard label="Room" value={mockOrder.room} />
        <InfoCard label="Staff" value={mockOrder.staff} />

        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <p className="text-sm text-gray-500">Status</p>
          <div className="mt-2">
            <Badge type="info">{mockOrder.status}</Badge>
          </div>
        </div>

      </div>

      {/* Items + Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Items */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h2 className="font-semibold mb-4">Items</h2>

          <div className="space-y-3">
            {mockOrder.items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between bg-gray-50 p-3 rounded-lg"
              >
                <span>{item.name} x {item.qty}</span>
                <span>₹{item.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t pt-3 flex justify-between font-medium">
            <span>Total</span>
            <span>
              ₹{mockOrder.items.reduce((a, b) => a + b.price, 0)}
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h2 className="font-semibold mb-4">Tracking</h2>

          <div className="space-y-4">
            {mockOrder.timeline.map((step, i) => (
              <div key={i} className="flex gap-3">

                <div
                  className={`w-4 h-4 mt-1 rounded-full ${
                    step.done ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />

                <div>
                  <p className="font-medium">{step.step}</p>
                  <p className="text-sm text-gray-500">{step.time}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Payment */}
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <h2 className="font-semibold mb-4">Payment</h2>

        <div className="flex justify-between">
          <span>Status</span>
          <Badge type="success">{mockOrder.payment}</Badge>
        </div>
      </div>

    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
}