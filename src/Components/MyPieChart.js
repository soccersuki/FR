import React from "react";
import { PieChart, Pie, Cell, Label, ResponsiveContainer,} from "recharts";

const COLORS = ["#FFBB28", "#00C49F", "#0088FE", "#FF8042"];

export default function MyPieChart(props) {
  const data = [
    { name: "Group A", value: Math.floor(props.food[6] * 4)},
    { name: "Group B", value: Math.floor(props.food[4] * 9)},
    { name: "Group C", value: Math.floor(props.food[5] * 4)},
  ];
  return (
    <ResponsiveContainer width='100%' aspect={1}>
      <PieChart>
        <Pie
          data={data}
          innerRadius='70%'
          outerRadius='100%'
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          startAngle={90}
          endAngle={-450}
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
