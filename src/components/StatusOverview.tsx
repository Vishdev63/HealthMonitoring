import { Card } from "@/components/ui/card";
import { Activity, Heart, Weight, Brain } from "lucide-react";

const StatusOverview = () => {
  const stats = [
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      label: "Heart Rate",
      value: "72 bpm",
      status: "Normal",
    },
    {
      icon: <Weight className="w-6 h-6 text-secondary" />,
      label: "Weight",
      value: "68 kg",
      status: "Optimal",
    },
    {
      icon: <Activity className="w-6 h-6 text-accent" />,
      label: "Activity",
      value: "6,500 steps",
      status: "Good",
    },
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      label: "Stress Level",
      value: "Low",
      status: "Excellent",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-4 hover:shadow-lg transition-shadow animate-fade-in">
          <div className="flex items-center space-x-4">
            {stat.icon}
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm text-primary">{stat.status}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StatusOverview;
