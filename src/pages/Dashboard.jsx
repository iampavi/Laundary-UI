import Card from "../components/ui/Card";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "00", value: 10 },
  { time: "04", value: 30 },
  { time: "08", value: 50 },
  { time: "12", value: 35 },
  { time: "16", value: 70 },
  { time: "20", value: 90 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card title="Total Requests Today" value="45" />
        <Card title="Pending Orders" value="12" />
        <Card title="Staff on Duty" value="8" />
        <Card title="Today's Revenue" value="₹15,400" />
      </div>

      {/* Chart */}
     <Card title="Order Volume (24h)">
  <div className="h-64">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis dataKey="time" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#2563EB"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</Card>

    </div>
  );
}