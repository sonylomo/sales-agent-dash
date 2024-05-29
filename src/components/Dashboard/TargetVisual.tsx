import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PieChartDisplay from "./PieChartDisplay";
import { PieData } from "@/types/dashboard";

const data: PieData = {
  analytics: [
    { name: "Target Achieved", value: 400 },
    { name: "Set Target", value: 1000 },
  ],
  finance: [
    { name: "Target Achieved", value: 300 },
    { name: "Set Target", value: 1000 },
  ],
  timetable: [
    { name: "Target Achieved", value: 400 },
    { name: "Set Target", value: 1000 },
  ],
};

const TargetVisual = () => {
  return (
    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl">Zeraki Analytics</CardTitle>
          {/* {card.icon} */}
        </CardHeader>
        <CardContent>
          <PieChartDisplay data={data.analytics} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl">Zeraki Finance</CardTitle>
          {/* {card.icon} */}
        </CardHeader>
        <CardContent>
          <PieChartDisplay data={data.analytics} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl">Zeraki Timetable</CardTitle>
          {/* {card.icon} */}
        </CardHeader>
        <CardContent>
          <PieChartDisplay data={data.analytics} />
        </CardContent>
      </Card>
    </div>
  );
};

export default TargetVisual;
