"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const yAxisFormatter = (value: number) => {
  return `$${value}`;
};

export function BLineChart({ data }: { data: Array<any> }) {
  return (
    <ResponsiveContainer
      width={"100%"}
      height={350}
      className="rounded-xl bg-gray-300 p-3"
    >
      <LineChart
        width={618}
        height={350}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={yAxisFormatter} />
        <Tooltip />
        <Line
          type="linear"
          dataKey="price"
          stroke="#000000"
          // activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
