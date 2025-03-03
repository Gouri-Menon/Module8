import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Attendance = () => {
  // Sample attendance data
  const attendanceData = [
    { date: "2025-03-01", percentage: 90 },
    { date: "2025-03-02", percentage: 85 },
    { date: "2025-03-03", percentage: 92 },
    { date: "2025-03-04", percentage: 88 },
  ];

  const chartData = {
    labels: attendanceData.map((record) => record.date),
    datasets: [
      {
        label: "Attendance Percentage",
        data: attendanceData.map((record) => record.percentage),
        backgroundColor: "#4A90E2",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Student Attendance" },
    },
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#002147]">Student Attendance</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default Attendance;
