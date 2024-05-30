import { useState, useEffect } from "react";
import {
  Bar,
  BarChart,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL

const SignUpOverview = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/signUpOverview`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} className="my-4">
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          // axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        {/* <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        /> */}
        <Bar
          dataKey="analytics"
          fill="#8884d8"
          radius={[4, 4, 0, 0]}
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="finance"
          fill="#000000"
          radius={[4, 4, 0, 0]}
          activeBar={<Rectangle fill="red" stroke="black" />}
        />

        <Bar
          dataKey="timetable"
          fill="#82ca9d"
          radius={[4, 4, 0, 0]}
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SignUpOverview;
