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

	return (
		<div className="my-20">
			{dolarData ? (
				<aside className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
					{dolarData.map((item) => (
						<article
							className="relative flex w-full items-center justify-between rounded-xl border 0 bg-whitejustify-center overflow-hidden  border-gray-800 bg-gradient-to-r from-black to-gray-950 px-8 shadow-2xl hover:cursor-crosshair  p-6 hover:scale-105 transition hover:brightness-130"
							key={item.casa}>
							<div>
								<p className="text-base text-gray-500 flex gap-1">
									{" "}
									<li>{item.moneda}</li>
									<li>{item.nombre}</li>
								</p>

								<p className="text-2xl font-normal text-gray-200 py-3">
									<li>Compra = ${item.compra}</li>
									<li>Venta = ${item.venta}</li>
								</p>
								<p className="text-xs text-gray-500 flex gap-1">
									Actualizado: {item.fechaActualizacion}
								</p>
							</div>

							<div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
									/>
								</svg>

								<span className="text-xs font-medium">
									{" "}
									67.81%{" "}
								</span>
							</div>
						</article>

						// <ul key={item.casa} className="border grid grid-cols-4 w-auto">
						// 	<article className="">
						// 		<header>
						// 			<li>{item.moneda}</li>
						// 			<li>{item.nombre}</li>
						// 		</header>
						// 		<main>
						// 			<li>{item.compra}</li>
						// 			<li>{item.venta}</li>
						// 		</main>
						// 		<footer>
						// 				<li>{item.fechaActualizacion}</li>
						// 		</footer>
						// 	</article>
						// </ul>
					))}
				</aside>
			) : (
				<p>Cargando...</p>
			)}
		</div>
	);
}

export default DolarComponent;
