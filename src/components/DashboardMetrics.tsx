import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", heartRate: 72, weight: 68, sleep: 7.5 },
  { name: "Tue", heartRate: 75, weight: 67.8, sleep: 6.8 },
  { name: "Wed", heartRate: 71, weight: 67.9, sleep: 7.2 },
  { name: "Thu", heartRate: 73, weight: 67.7, sleep: 7.8 },
  { name: "Fri", heartRate: 74, weight: 67.6, sleep: 6.5 },
  { name: "Sat", heartRate: 70, weight: 67.5, sleep: 8.2 },
  { name: "Sun", heartRate: 69, weight: 67.4, sleep: 7.9 },
];

const DashboardMetrics = () => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Weekly Health Trends</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="heartRate" stroke="#0FB5AE" name="Heart Rate" />
            <Line type="monotone" dataKey="sleep" stroke="#4C83FF" name="Sleep (hrs)" />
            <Line type="monotone" dataKey="weight" stroke="#9E8CFF" name="Weight (kg)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default DashboardMetrics;
