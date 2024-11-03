import StatusOverview from "@/components/StatusOverview";
import DashboardMetrics from "@/components/DashboardMetrics";
import HealthInsights from "@/components/HealthInsights";
import RecommendationCard from "@/components/RecommendationCard";
import MetricsForm from "@/components/MetricsForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">HealthSync AI</h1>
          <p className="text-gray-600 mt-2">Your Personal Health Analytics Dashboard</p>
        </header>

        <div className="space-y-8">
          <StatusOverview />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <DashboardMetrics />
            <RecommendationCard />
          </div>

          <HealthInsights />
          
          <MetricsForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
