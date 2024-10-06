import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['April 30', 'May 1', 'May 2', 'May 3', 'May 4'],
  datasets: [
    {
      label: 'Solar Flare Intensity (X-class)',
      data: [3.4, 4.0, 5.1, 4.8, 6.2],
      backgroundColor: 'white',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Solar Flare Intensity during May 2024' },
  },
};

const Measurements = () => {
  return (
    <div className="measurements">
      <h2>Measurements</h2>
      <p>Here are the recorded intensities of solar flares during the event:</p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Measurements;
