import { useState, useEffect } from "react";
import "./DolarComponent.css";

function DolarComponent() {
	const [dolarData, setDolarData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("https://dolarapi.com/v1/dolares");
				if (!response.ok) {
					throw new Error("Hubo un problema al obtener los datos.");
				}

				const data = await response.json();
				setDolarData(data);
			} catch (error) {
				console.error("Error al obtener los datos:", error);
			}
		}

		fetchData();
	}, []);
	// Función para formatear la fecha de actualización
	const formatDate = (date) => {
		const formattedDate = new Date(date);
		const day = formattedDate.getDate();
		const month = formattedDate.getMonth() + 1;
		const year = formattedDate.getFullYear();
		const hours = formattedDate.getHours();
		const minutes = formattedDate.getMinutes();
		const seconds = formattedDate.getSeconds();

		// Asegurarse de que el día, mes, hora, minuto y segundo tengan 2 dígitos
		const formattedDay = String(day).padStart(2, "0");
		const formattedMonth = String(month).padStart(2, "0");
		const formattedHours = String(hours).padStart(2, "0");
		const formattedMinutes = String(minutes).padStart(2, "0");
		const formattedSeconds = String(seconds).padStart(2, "0");

		return `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
	};

	const lastUpdate = dolarData
		? formatDate(dolarData[0].fechaActualizacion)
		: null;

	const formatLastUpdate = formatDate(lastUpdate);

	return (
		<div className="absolute left-0 right-0 m-auto bottom-0 w-full  max-w-screen-2xl overflow-hidden mx-auto px-4 lg:px-20 xl:px-16 pb-5 ">
			{dolarData ? (
				<aside
					className="w-full flex justify-between  overflow-hidden opacity-75 "
					id="price-slider">
					{dolarData
						.filter((item) =>
							["Oficial", "Blue", "Bolsa", "Cripto"].includes(
								item.nombre
							)
						)
						.map((item) => (
							<article
								className="whitespace-nowrap"
								key={item.casa}
								title={item.fechaActualización}
								id="article-dolar">
								<div className="">
									<div className="flex  items-center ">
										<p className="text-sm text-white font-semibold flex gap-1 pr-2 ">
											<li className="inline-flex rounded  text-green-500 animate-pulse  ">
												●
											</li>
											<li>{item.moneda}</li>
											<li>{item.nombre}</li>
										</p>

										<p className="text-sm text-center font-normal text-white py-3 flex gap-2">
											<li>Compra = ${item.compra}</li>
											<li>Venta = ${item.venta}</li>
										</p>
									</div>
								</div>
							</article>
						))}
				</aside>
			) : (
				// si no hay datos, mostramos un skeleton por cada item que no ha cargado
				<aside className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
					{[1, 2, 3, 4].map((_, index) => (
						<article
							className="relative flex w-full items-center justify-between rounded-xl  px-8 hover:cursor-crosshair  p-1 transition hover:brightness-130"
							key={index}>
							<div role="status" class="max-w-sm animate-pulse">
								<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
								<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
								<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
								<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
								<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
								<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
								<span class="sr-only">Loading...</span>
							</div>
						</article>
					))}
				</aside>
			)}
		</div>
	);
}
export default DolarComponent;
