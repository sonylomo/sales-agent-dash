import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PieChartDisplay from "./PieChartDisplay";
import { PieData } from "@/types/dashboard";
import axios from "axios";
import { useState, useEffect } from "react";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

const TargetVisual = () => {
  const [data, setData] = useState<PieData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/targetVisuals`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl">Zeraki Analytics</CardTitle>
          {/* {card.icon} */}
        </CardHeader>
        <CardContent>
          {data && <PieChartDisplay data={data.analytics} />}
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl">Zeraki Finance</CardTitle>
          {/* {card.icon} */}
        </CardHeader>
        <CardContent>
         {data && <PieChartDisplay data={data.finance} />}
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl">Zeraki Timetable</CardTitle>
          {/* {card.icon} */}
        </CardHeader>
        <CardContent>
         {data && <PieChartDisplay data={data.timetable} />}
        </CardContent>
      </Card>
    </div>
  );
};

export default TargetVisual;
