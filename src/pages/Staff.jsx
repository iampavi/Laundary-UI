import Badge from "../components/ui/Badge";

export default function Staff() {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">

      <div className="bg-white p-5 rounded-2xl shadow-sm border hover:shadow-md transition">
        <h3 className="font-semibold">Anisha Kapoor</h3>
        <p className="text-sm text-gray-500">Supervisor</p>
        <div className="mt-3">
          <Badge type="success">Active</Badge>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm border hover:shadow-md transition">
        <h3 className="font-semibold">Rajesh Kumar</h3>
        <p className="text-sm text-gray-500">Main Washer</p>
        <div className="mt-3">
          <Badge type="warning">On Break</Badge>
        </div>
      </div>

    </div>
  );
}