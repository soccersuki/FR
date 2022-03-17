// import "./styles.css";
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
    { name: "Group A", value: props.food[6] },
    { name: "Group B", value: props.food[4] },
    { name: "Group C", value: props.food[5] },
  ];
  return (
    <ResponsiveContainer width='100%' aspect={1}>
      <PieChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
        <Pie
          data={data2}
          innerRadius='80%'
          outerRadius='100%'
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label width={30} position="center">
            {props.food[3]}kcal
          </Label>
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
