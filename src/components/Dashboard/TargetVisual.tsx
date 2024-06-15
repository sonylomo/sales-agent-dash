import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import PieChartDisplay from "./PieChartDisplay";
import { PieData } from "@/types/dashboard";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

type CardConfig = {
  title: string;
  dataKey: keyof PieData;
};

const cardConfigs: CardConfig[] = [
  { title: "Zeraki Analytics", dataKey: "analytics" },
  { title: "Zeraki Finance", dataKey: "finance" },
  { title: "Zeraki Timetable", dataKey: "timetable" },
];

const TargetVisual: React.FC = () => {
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
      {cardConfigs.map((card, idx) => (
        <motion.div
          initial={{
            opacity: 0,
            y: -40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: (idx + 4) * 0.25,
            },
          }}
          viewport={{ once: true }}
        >
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl">{card.title}</CardTitle>
              {/* {card.icon} */}
            </CardHeader>
            <CardContent>
              {data && <PieChartDisplay data={data[card.dataKey]} />}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default TargetVisual;
