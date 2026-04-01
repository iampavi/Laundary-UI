import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "../components/ui/Card";
const data = [
  { time: "00", value: 10 },
  { time: "04", value: 25 },
  { time: "08", value: 40 },
  { time: "12", value: 30 },
  { time: "16", value: 60 },
  { time: "20", value: 80 },
];
export default function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Top Stats */}
     <div className="grid grid-cols-4 gap-6">
  <Card title="Total Requests Today" value="45" extra="+12% vs yesterday" />
  <Card title="Pending Orders" value="12" extra="Avg wait: 45m" />
  <Card title="Staff on Duty" value="8" extra="Optimal" />
  <Card title="Today's Revenue" value="₹15,400" extra="+5.4%" />
</div>

      {/* Chart Placeholder */}
      <div className="bg-white p-6 rounded-2xl shadow-sm">
  <h3 className="mb-4 font-semibold">Order Volume (24h)</h3>

  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={data}>
      <XAxis dataKey="time" />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#2563EB" />
    </LineChart>
  </ResponsiveContainer>
</div>

    </div>
  );
}