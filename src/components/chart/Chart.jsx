import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

import styles from "./Chart.module.scss";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: false,
			text: "Chart.js Bar Chart",
		},
	},
};

const Chart = () => {
	// Create a new array of order status

	const [q1, q2, q3, q4] = ["Order Placed...", "Processing...", "Shipped...", "Delivered"];

	const data = {
		labels: ["Placed Orders", "Processing", "Shipped", "Delivered"],
		datasets: [
			{
				label: "Order count",
				data: [453, 32, 56, 235],
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	};

	return (
	
					<div className="text-center p-3">
						<h3 className="my-3">Order Status Chart</h3>
						<Bar options={options} data={data} />
					</div>

	);
};

export default Chart;
