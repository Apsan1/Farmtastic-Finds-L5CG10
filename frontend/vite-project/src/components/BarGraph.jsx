import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '@tailwindcss/forms';

const VisitorAndSalesChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    const chartData = {
      labels: months,
      datasets: [
        {
          data: [860, 1140, 1060, 1060, 1070],
          backgroundColor: 'rgba(255, 165, 0, 1)',
          label: 'Visitors',
        },
        {
          data: [1600, 1700, 1700, 1900, 2000],
          backgroundColor: 'rgba(75, 192, 192, 2)',
          label: 'Sales (Rs.)',
        },
      ],
    };

    const chartOptions = {
      legend: {
        display: true,
      },
      responsive: true, // Set responsive to true
      maintainAspectRatio: true, // Maintain the original aspect ratio
      scales: {
        x: {
          ticks: {
            font: {
              size: 12,
            },
          },
          title: {
            display: true,
            text: 'Month',
          },
        },
        y: {
          ticks: {
            font: {
              size: 12,
            },
          },
          grid: {
            display: false, // Hide grid lines
          },
        },
      },
    };

    const myChart = new Chart(canvasRef.current, {
      type: 'bar',
      data: chartData,
      options: chartOptions,
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="w-110 h-140"> {/* Preserve the original size */}
      <canvas ref={canvasRef} />
    </div>
  );
};

export default VisitorAndSalesChart;

