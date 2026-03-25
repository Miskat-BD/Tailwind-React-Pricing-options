import React from 'react';
import { Area, AreaChart, Bar, BarChart, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
const students = [
    { name: "Rahim", physics: 78, chemistry: 82, math: 85 },
    { name: "Karim", physics: 88, chemistry: 76, math: 90 },
    { name: "Sakib", physics: 92, chemistry: 89, math: 95 },
    { name: "Tamim", physics: 65, chemistry: 70, math: 68 },
    { name: "Naim", physics: 74, chemistry: 72, math: 80 },
    { name: "Rafi", physics: 85, chemistry: 88, math: 87 },
    { name: "Jahid", physics: 90, chemistry: 85, math: 91 },
    { name: "Sumon", physics: 55, chemistry: 60, math: 58 },
    { name: "Hasan", physics: 80, chemistry: 78, math: 84 },
    { name: "Rakib", physics: 68, chemistry: 75, math: 70 }
];
const ResultChart = () => {
    return (
        <div>
            <LineChart width={1000} height={500} data={students}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey={'math'}></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
                <Line dataKey={'physics'} stroke='green'></Line>

            </LineChart>
            <br></br>
            <AreaChart width={1000} height={500} data={students}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Area dataKey={'math'}></Area>
                <Area dataKey={'physics'} fill='green'></Area>
                <Area dataKey={'chemistry'} fill='red'></Area>
            </AreaChart>
            <br></br>

            <BarChart width={1200} height={480} data={students}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'math'}></Bar>
            </BarChart>

            <br></br>
            <PieChart width={600} height={400} data={students}>
                <Pie data={students}
                    dataKey="math"
                    cx="50%"
                    cy="50%"
                    outerRadius={180}
                    fill="blue"></Pie>
                <Pie data={students}
                    dataKey="physics"
                    cx="50%"
                    cy="50%"
                    outerRadius={130}
                    fill="red"></Pie>
                {/* <Pie dataKey={'physics'} innerRadius="60%"
                    outerRadius="80%"
                    fill="green"></Pie>
                <Pie dataKey={'chemistry'} innerRadius="80%"
                    outerRadius="90%"
                    fill="red" cx="50%"
                    cy="50%"></Pie> */}
            </PieChart>

            <br></br>

        </div >
    );
};

export default ResultChart;