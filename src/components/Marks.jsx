import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Marks = ({ studentName }) => {
  const marksData = [
    { subject: 'Math', marks: 85 },
    { subject: 'Science', marks: 90 },
    { subject: 'English', marks: 78 },
    { subject: 'History', marks: 88 },
    { subject: 'Geography', marks: 92 },
  ];

  const chartData = {
    labels: marksData.map((record) => record.subject),
    datasets: [
      {
        label: 'Marks',
        data: marksData.map((record) => record.marks),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    indexAxis: 'y', 
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: `Marks of ${studentName}` },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        },
      },
    },
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#002147]">Student Marks</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default Marks;