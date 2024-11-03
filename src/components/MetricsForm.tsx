import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const MetricsForm = () => {
  const [metrics, setMetrics] = useState({
    weight: "",
    heartRate: "",
    sleepHours: "",
    stressLevel: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Health metrics updated successfully!");
    // Here we would typically send the data to an API
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Update Health Metrics</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Weight (kg)</label>
            <Input
              type="number"
              placeholder="Enter weight"
              value={metrics.weight}
              onChange={(e) => setMetrics({ ...metrics, weight: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Heart Rate (bpm)</label>
            <Input
              type="number"
              placeholder="Enter heart rate"
              value={metrics.heartRate}
              onChange={(e) => setMetrics({ ...metrics, heartRate: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Sleep Hours</label>
            <Input
              type="number"
              placeholder="Enter sleep hours"
              value={metrics.sleepHours}
              onChange={(e) => setMetrics({ ...metrics, sleepHours: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Stress Level (1-10)</label>
            <Input
              type="number"
              placeholder="Enter stress level"
              value={metrics.stressLevel}
              onChange={(e) => setMetrics({ ...metrics, stressLevel: e.target.value })}
            />
          </div>
        </div>
        <Button type="submit" className="w-full">Update Metrics</Button>
      </form>
    </Card>
  );
};

export default MetricsForm;
