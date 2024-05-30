import { Metric } from "@/types/dashboard";
import { SetStateAction, useState } from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import renderActiveShape from "./RenderActiveShape";

const PieChartDisplay = ({ data }: { data: Metric[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: unknown, index: SetStateAction<number>) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart className="flex flex-col justify-center items-center">
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#F3D6D0"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartDisplay;
