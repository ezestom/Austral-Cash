import { useState } from "react";

export function LegalDialog({ anchor, title, paragraph }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDialog = () => {
		setIsOpen(!isOpen); // Invierte el estado de dialogOpen
		document.body.style.overflowY = isOpen ? "auto" : "hidden";
	};

	return (
		<>
			<button onClick={toggleDialog} class="hover:underline text-start">
				{anchor}
			</button>
			{isOpen && (
				<dialog
					isOpen={isOpen}
					className="backdrop-blur-[.15rem] bg-transparent flex items-center justify-center rounded-[3rem]">
					<aside className="bg-white text-black max-w-[95%] flex flex-col items-center justify-evenly md:w-1/2 h-[90%] md:h-[60vh] rounded-[3rem] shadow-md shadow-black px-10 overflow-y-auto ">
						<strong>{title}</strong>
						<p>{paragraph}</p>
						<button
							onClick={toggleDialog}
							className="hover:underline">
							cerrar
						</button>
					</aside>
				</dialog>
			)}
		</>
	);
}
