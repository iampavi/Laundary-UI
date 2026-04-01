import Card from "../components/ui/Card";

export default function Analytics() {
  return (
    <div className="space-y-6">

      <div className="grid grid-cols-3 gap-4">
        <Card title="Total Revenue" value="$42,850" />
        <Card title="Avg Daily" value="$1,428" />
        <Card title="Forecast" value="$48,200" />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="font-semibold mb-4">Revenue Distribution</h3>

        <div className="space-y-3">
          <div>
            <p>Dry Cleaning</p>
            <div className="bg-gray-200 h-2 rounded-full">
              <div className="bg-blue-600 h-2 w-[60%] rounded-full"></div>
            </div>
          </div>

          <div>
            <p>Standard Laundry</p>
            <div className="bg-gray-200 h-2 rounded-full">
              <div className="bg-blue-400 h-2 w-[40%] rounded-full"></div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}