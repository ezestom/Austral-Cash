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

	return (
		<div className="my-20">
			{dolarData ? (
				<aside className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
					{dolarData.map((item) => (
						<article
							className="relative flex w-full items-center justify-between rounded-xl border 0 bg-whitejustify-center overflow-hidden  border-gray-800 bg-gradient-to-r from-black to-gray-950 px-8 shadow-2xl hover:cursor-crosshair  p-6 hover:scale-105 transition hover:border-gray-700 hover:brightness-130"
							key={item.casa}
							title={item.fechaActualización}
							id="article-dolar">
							<div>
								<p className="text-base text-gray-400 flex gap-1">
									<li className="inline-flex rounded  text-green-500 animate-pulse ">
										●
									</li>
									<li>{item.moneda}</li>
									<li>{item.nombre}</li>
								</p>

								<p className="text-2xl font-normal text-gray-100 py-3">
									<li>Compra = ${item.compra}</li>
									<li>Venta = ${item.venta}</li>
								</p>
								<p
									className="text-xs text-gray-300 gap-1 "
									id="actualization-text">
									Última actualización:{" "}
									{formatDate(item.fechaActualizacion)}
								</p>
							</div>
						</article>
					))}
				</aside>
			) : (
				// si no hay datos, mostramos un skeleton por cada item que no ha cargado
				<aside className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
					<article className="relative flex w-full items-center justify-between rounded-xl border 0 bg-whitejustify-center overflow-hidden  border-gray-800 bg-gradient-to-r from-black to-gray-950 px-8 shadow-2xl hover:cursor-crosshair  p-6 hover:scale-105 transition hover:brightness-130">
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

					<article className="relative flex w-full items-center justify-between rounded-xl border 0 bg-whitejustify-center overflow-hidden  border-gray-800 bg-gradient-to-r from-black to-gray-950 px-8 shadow-2xl hover:cursor-crosshair  p-6 hover:scale-105 transition hover:brightness-130">
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

					<article className="relative flex w-full items-center justify-between rounded-xl border 0 bg-whitejustify-center overflow-hidden  border-gray-800 bg-gradient-to-r from-black to-gray-950 px-8 shadow-2xl hover:cursor-crosshair  p-6 hover:scale-105 transition hover:brightness-130">
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

					<article className="relative flex w-full items-center justify-between rounded-xl border 0 bg-whitejustify-center overflow-hidden  border-gray-800 bg-gradient-to-r from-black to-gray-950 px-8 shadow-2xl hover:cursor-crosshair  p-6 hover:scale-105 transition hover:brightness-130">
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

					<article className="relative flex w-full items-center justify-between rounded-xl border 0 bg-whitejustify-center overflow-hidden  border-gray-800 bg-gradient-to-r from-black to-gray-950 px-8 shadow-2xl hover:cursor-crosshair  p-6 hover:scale-105 transition hover:brightness-130">
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

					<article className="relative flex w-full items-center justify-between rounded-xl border 0 bg-whitejustify-center overflow-hidden  border-gray-800 bg-gradient-to-r from-black to-gray-950 px-8 shadow-2xl hover:cursor-crosshair  p-6 hover:scale-105 transition hover:brightness-130">
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

					<article className="relative flex w-full items-center justify-between rounded-xl border 0 bg-whitejustify-center overflow-hidden  border-gray-800 bg-gradient-to-r from-black to-gray-950 px-8 shadow-2xl hover:cursor-crosshair  p-6 hover:scale-105 transition hover:brightness-130">
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
				</aside>
			)}
		</div>
	);
}

export default DolarComponent;
