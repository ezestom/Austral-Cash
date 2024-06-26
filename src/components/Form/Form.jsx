import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import x from "../../icons/x.svg";
import "./Form.css";

export function Form() {
	const [dialog, setDialog] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (isMessageSuccess()) {
			toast("¡Formulario enviado con éxito! Gracias por su confianza.", {
				type: "success",
			});
			closeDialog();
		}
	}, []);

	const openDialog = () => {
		setDialog(true);
		document.body.style.overflowY = "hidden";

		document.getElementById("header").style.display = "none";
	};

	const closeDialog = () => {
		setDialog(false);
		document.body.style.overflowY = "auto";
		document.getElementById("header").style.display = "flex";
	};

	const isMessageSuccess = () => {
		return window.location.search.includes("success=true");
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);

		setIsLoading(true);

		try {
			const response = await fetch(form.action, {
				method: form.method,
				body: formData,
			});

			if (response.ok) {
				toast(
					"¡Formulario enviado con éxito! Gracias por su confianza.",
					{
						type: "success",
					}
				);
				closeDialog();
			} else {
				throw new Error("Error al enviar el formulario");
			}
		} catch (error) {
			toast.error(
				"Hubo un problema al enviar el formulario, por favor inténtelo de nuevo."
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="relative form-container z-10 m-auto h-auto">
			<Toaster />

			<div className="flex w-full items-center justify-center">
				<a
					href="https://librecounter.org/referer/show"
					target="_blank"
					className="w-2 absolute bottom-5 mx-auto ml-7">
					<img
						src="https://librecounter.org/counter.svg"
						referrerPolicy="unsafe-url"
					/>
				</a>
			</div>
			<span className=" btn-form">
				<button
					className="relative inline-flex h-14 overflow-hidden rounded-[3rem] p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 transition hover:scale-105 border"
					onClick={openDialog}
					id="open-dialog">
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[3rem] b bg-gradient-to-r from-[--bg] to-[--bg3] px-10  font-bold text-base text-gray-50 backdrop-blur-3xl">
						Ir al formulario
						<svg
							className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
							aria-hidden="true"
							fill="none"
							viewBox="0 0 14 10">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"></path>
						</svg>
					</span>
				</button>
			</span>

			{dialog && (
				<dialog
					open
					className="backdrop-blur bg-transparent h-full flex items-center justify-center">
					<div className=" flex  w-full items-center justify-center overflow-hidden rounded-[3rem] border border-gray-800 bg-[#202020] shadow-2xl max-w-[400px] h-auto ">
						{isLoading && (
							<div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur  opacity-50 flex justify-center items-center z-50">
								<span class="loader"></span>
							</div>
						)}
						<form
							onSubmit={handleSubmit}
							method="POST"
							action="https://formsubmit.co/australcash@gmail.com"
							className="px-6">
							{/* <input
								type="hidden"
								name="_cc"
								value="ezequielstom@gmail.com"
							/> */}

							<input
								type="hidden"
								name="_subject"
								value="Austral Cash | 📩 Nuevo Mensaje!"
							/>
							<input
								type="hidden"
								name="_autoresponse"
								value="Tu mensaje fue exitoso, te responderemos a la brevedad! Gracias. "></input>
							<input
								type="hidden"
								name="_next"
								value="https://australcash.netlify.app/"
							/>
							<input
								type="hidden"
								name="_captcha"
								value="false"
							/>
							<legend>
								<button
									className="flex justify-center items-center w-full bg "
									id="close-dialog"
									onClick={closeDialog}>
									<img
										className=" bg-[#303030] rounded hover:bg-[#262626] transition mt-5"
										src={x.src}
										alt="x-icon"
									/>
								</button>
							</legend>

							<div className="flex flex-col gap-2 min-w-[350px] text-slate-200">
								<label htmlFor="name">
									Nombre y Apellido
									<input
										type="text"
										name="name"
										id="name"
										placeholder="John Doe"
										required
										className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[#303030]	bg-origin-border p-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-200 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none"
									/>
								</label>
								<label htmlFor="email">
									Correo Electrónico
									<input
										className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[#303030]	bg-origin-border p-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-200 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none"
										type="email"
										name="email"
										id="email"
										placeholder="john_doe@ejemplo.com"
										required
									/>
								</label>
								<label htmlFor="phone">
									Teléfono
									<input
										className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[#303030]	bg-origin-border p-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-200 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none"
										type="tel"
										name="phone"
										id="phone"
										placeholder="+54 9 11 1234 5678"
										required
									/>
								</label>
								<label htmlFor="case">
									Asunto
									<input
										className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[#303030]	bg-origin-border p-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-200 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none"
										type="text"
										name="case"
										id="case"
										placeholder="Quiero cambiar USDT"
										required
									/>
								</label>
								<label htmlFor="message">
									Mensaje
									<textarea
										className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[#303030]	bg-origin-border p-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-200 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none min-h-[100px]"
										name="message"
										id="message"
										placeholder="Como puedo cambiar mis USDT a pesos argentinos?"
										required></textarea>
								</label>
								<p>
									{" "}
									¡Esperamos poder ayudarte con nuestras
									soluciones financieras!
								</p>
								<button
									type="submit"
									className="z-100 max-w-[250px] mx-auto my-10 relative flex h-12 overflow-hidden rounded-xl p-[2px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 transition hover:scale-105"
									id="btn-submit">
									<span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
									<span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-[black] to-[#13151a] px-8 py-1 font-medium text-gray-50 backdrop-blur-3xl">
										<span class="relative font-semibold text-white">
											Enviar mi consulta
										</span>
										<svg
											class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
											aria-hidden="true"
											fill="none"
											viewBox="0 0 14 10">
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M1 5h12m0 0L9 1m4 4L9 9"></path>
										</svg>
									</span>
								</button>
							</div>
						</form>
					</div>
				</dialog>
			)}
		</div>
	);
}
