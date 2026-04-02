import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

const rooms = [
  {
    number: 101,
    type: "Deluxe",
    status: "Available",
    staff: "—",
  },
  {
    number: 204,
    type: "Suite",
    status: "Occupied",
    staff: "Anisha Kapoor",
  },
  {
    number: 305,
    type: "Standard",
    status: "Cleaning",
    staff: "Rajesh Kumar",
  },
];

export default function Rooms() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Rooms Management</h2>
        <Button>Add Room</Button>
      </div>

      {/* Table */}
      <table className="w-full text-sm">

        <thead className="text-gray-400">
          <tr>
            <th className="text-left py-3">Room No</th>
            <th>Type</th>
            <th>Status</th>
            <th>Assigned Staff</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y">

          {rooms.map((room, i) => (
            <tr key={i} className="hover:bg-gray-50 transition">

              <td className="py-3">{room.number}</td>
              <td>{room.type}</td>

              <td>
                <StatusBadge status={room.status} />
              </td>

              <td>{room.staff}</td>

              <td>
                <div className="flex gap-2">
                  <Button variant="secondary">Assign</Button>
                  <Button>Update</Button>
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
    status === "Available"
      ? "success"
      : status === "Occupied"
      ? "info"
      : "warning";

  return <Badge type={type}>{status}</Badge>;
}