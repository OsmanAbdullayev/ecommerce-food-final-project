import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTranslation } from "react-i18next";

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
	const { t } = useTranslation();

	const data = {
		labels: [t(`placedOrders`), t(`processing`), t(`shipped`), t(`delivered`)],
		datasets: [
			{
				label: t(`orderCount`),
				data: [453, 32, 56, 235],
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	};

	return (
		<div className="text-center p-3">
			<h3 className="my-3"> {t(`oderStatusChart`)} </h3>
			<Bar options={options} data={data} />
		</div>
	);
};

export default Chart;
