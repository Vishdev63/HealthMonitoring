import { Card } from "@/components/ui/card";
import { Lightbulb, TrendingUp, AlertCircle } from "lucide-react";

const HealthInsights = () => {
  const insights = [
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
      title: "Sleep Pattern Insight",
      description: "Your sleep quality has improved by 15% this week. Keep maintaining a consistent schedule!",
      type: "success",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Activity Trend",
      description: "You're more active in the mornings. Consider scheduling important tasks during this peak energy time.",
      type: "info",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-secondary" />,
      title: "Health Alert",
      description: "Heart rate variability indicates slightly elevated stress levels. Try some breathing exercises.",
      type: "warning",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">AI Health Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {insights.map((insight, index) => (
          <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              {insight.icon}
              <div>
                <h3 className="font-semibold text-lg">{insight.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{insight.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HealthInsights;
