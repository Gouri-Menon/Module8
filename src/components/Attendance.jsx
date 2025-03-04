import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Attendance = () => {
  const attendanceData = [
    { subject: 'Math', percentage: 90 },
    { subject: 'Science', percentage: 85 },
    { subject: 'English', percentage: 92 },
    { subject: 'History', percentage: 88 },
    { subject: 'Geography', percentage: 95 },
  ];

  const chartData = {
    labels: attendanceData.map((record) => record.subject),
    datasets: [
      {
        label: 'Attendance Percentage',
        data: attendanceData.map((record) => record.percentage),
        backgroundColor: '#4A90E2',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Attendance Percentage in each Subject' },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        },
        title: {
          display: true,
          text: 'Attendance Percentage',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Subjects',
        },
      },
    },
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-lg rounded-xl  ">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#002147] ">Student Attendance</h2>
      <Bar data={chartData} options={chartOptions}  />
    </div>
  );
};

export default Attendance;