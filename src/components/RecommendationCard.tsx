import { Card } from "@/components/ui/card";
import { Check, Clock, Activity, Coffee } from "lucide-react";

const RecommendationCard = () => {
  const recommendations = [
    {
      icon: <Activity className="w-5 h-5 text-primary" />,
      title: "30min Morning Walk",
      time: "8:00 AM",
      completed: true,
    },
    {
      icon: <Coffee className="w-5 h-5 text-secondary" />,
      title: "Take Vitamins",
      time: "9:00 AM",
      completed: false,
    },
    {
      icon: <Clock className="w-5 h-5 text-accent" />,
      title: "Meditation Session",
      time: "7:00 PM",
      completed: false,
    },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Today's Recommendations</h2>
      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              {item.icon}
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">{item.time}</p>
              </div>
            </div>
            {item.completed ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecommendationCard;
