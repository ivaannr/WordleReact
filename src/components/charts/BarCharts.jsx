import './Charts.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

export const StackedBarChart = ({ data }) => {
  return (
    <BarChart
      style={{ width: '95%', height: '30vh', aspectRatio: 1.618, backgroundColor: "transparent", borderColor: "transparent" }}
      responsive
      data={data}
      margin={{
        top: 60,
        right: 0,
        left: 10,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip
        contentStyle={{
          backgroundColor: "#111",
          border: "none",
          color: "#d4d4d4",
          boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
        }}
        cursor={{ fill: "rgba(255,255,255,0.05)" }}
      />
      <Bar dataKey="pv" stackId="a" fill="#34be3b" background />
      <Bar dataKey="uv" stackId="a" fill="#ff9d14ff" background />
      <RechartsDevtools />
    </BarChart>
  );
};

export const SimpleBarChart = ({ data }) => {
  return (
    <BarChart
      style={{ width: '95%', maxHeight: '30vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 0,
        right: 6,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip
        contentStyle={{
          backgroundColor: "#111",
          border: "none",
          color: "#d4d4d4",
          boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
        }}
        cursor={{ fill: "rgba(255,255,255,0.05)" }}
      />
      <Bar dataKey="pv" fill="#1e92ff" activeBar={{ fill: 'blue', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
      <Bar dataKey="uv" fill="#ff3131" activeBar={{ fill: 'red', stroke: 'red' }} radius={[10, 10, 0, 0]} />
      <RechartsDevtools />
    </BarChart>
  );
};

export const MarginlessSimpleBarChart = ({ data }) => {
  return (
    <BarChart
      style={{ width: '95%', height: '30vh', aspectRatio: 1.618, paddingBottom: "510" }}
      responsive
      data={data}
      margin={{
        top: 40,
        right: 0,
        left: 10,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip
        contentStyle={{
          backgroundColor: "#111",
          border: "none",
          color: "#d4d4d4",
          boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
        }}
        cursor={{ fill: "rgba(255,255,255,0.05)" }}
      />
      <Bar dataKey="pv" fill="#1e92ff" activeBar={{ fill: 'blue', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
      <Bar dataKey="uv" fill="#ff3131" activeBar={{ fill: 'red', stroke: 'red' }} radius={[10, 10, 0, 0]} />
      <RechartsDevtools />
    </BarChart>
  );
};

export const MixBarChart = ({ data }) => {
  return (
    <BarChart
      style={{ width: '95%', maxHeight: '30vh', aspectRatio: 1.618, backgroundColor: "transparent" }}
      responsive
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip
        contentStyle={{
          backgroundColor: "#111",
          border: "none",
          color: "#d4d4d4",
          boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
        }}
        cursor={{ fill: "rgba(255,255,255,0.05)" }}
      />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
      <Bar dataKey="uv" fill="#ffc658" />
      <RechartsDevtools />
    </BarChart>
  );
};
