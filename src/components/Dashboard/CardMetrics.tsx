import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LiaCreditCard } from "react-icons/lia";
import { BsPeople } from "react-icons/bs";
import { LuDollarSign } from "react-icons/lu";
import { FiActivity } from "react-icons/fi";
import axios from "axios";
import { useState, useEffect } from "react";
import { CardMetrics as CardMetricsType } from "@/types/dashboard";
import { motion } from "framer-motion";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

const CardMetrics = () => {
  const [data, setData] = useState<CardMetricsType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/metrics`);
        const icons = [
          <LiaCreditCard className="text-primary-pink size-7" />,
          <BsPeople className="text-primary-pink size-7" />,
          <LuDollarSign className="text-primary-pink size-7" />,
          <FiActivity className="text-primary-pink size-7" />,
        ];
        const updatedData = response.data.map(
          (item: CardMetricsType, index: number) => ({
            ...item,
            icon: icons[index % icons.length],
          })
        );
        setData(updatedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {data.map((card, idx) => (
        <motion.div
          key={card.title}
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
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              {card.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">
                {card.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default CardMetrics;
