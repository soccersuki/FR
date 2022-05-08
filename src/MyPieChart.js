import React from "react";
import { PieChart, Pie, Sector, Cell, Label, ResponsiveContainer, LabelList, } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function MyPieChart(props) {
  const data2 = [
    { name: "Group A", value: Math.floor(props.food[6] * 4)},
    { name: "Group B", value: Math.floor(props.food[4] * 9)},
    { name: "Group C", value: Math.floor(props.food[5] * 4)},
  ];
  return (
    <ResponsiveContainer width='100%' aspect={1}>
      <PieChart>
        <Pie
          data={data2}
          innerRadius='70%'
          outerRadius='100%'
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label position="center" fill="grey" fontSize={20}>
            {`${props.food[3]}kcal`}
          </Label>
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
