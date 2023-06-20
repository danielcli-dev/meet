import React, { useEffect, useState, PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => getData());
  }, [events]);

  getData = () => {
    const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
    const data = genres.map((genre) => {
      const value = filter(({ summary }) =>
        summary.split(" ").includes(genre)
      ).length;
      return { name: genre, value };
    });
    return data;
  };

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {/* {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))} */}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
export default EventGenre;
