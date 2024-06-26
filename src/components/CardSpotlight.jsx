import { useRef, useState } from "react";
import close from "../icons/x.svg";

const CardSpotlight = ({ header, main, footer, img }) => {
	const divRef = useRef(null);
	const [isFocused, setIsFocused] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [opacity, setOpacity] = useState(0);
	const [dialogOpen, setDialogOpen] = useState(false);

	const handleMouseMove = (e) => {
		if (!divRef.current || isFocused) return;

		const div = divRef.current;
		const rect = div.getBoundingClientRect();

		setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
	};

	const handleFocus = () => {
		setIsFocused(true);
		setOpacity(1);
	};

	const handleBlur = () => {
		setIsFocused(false);
		setOpacity(0);
	};

	const handleMouseEnter = () => {
		setOpacity(1);
	};

	const handleMouseLeave = () => {
		setOpacity(0);
	};

	const toggleDialog = () => {
		setDialogOpen(!dialogOpen); // Invierte el estado de dialogOpen
		// document.body.style.overflow = dialogOpen ? "auto" : "hidden";
	};

	return (
		<button
			onClick={toggleDialog}
			className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[3rem] bg-white min-h-[275px] focus:outline-none shadow-md shadow-black">
			<div
				ref={divRef}
				onMouseMove={handleMouseMove}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className="absolute inset-0">
				<div
					className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
					style={{
						opacity,
						background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(81,79,255,.2), transparent 50%)`,
					}}
				/>
				<article className="h-full w-full flex flex-col justify-between py-12">
					<header className="text-2xl m-auto md:text-4xl font-bold text-black">
						{header}
					</header>
				</article>
			</div>
			{dialogOpen && (
				<dialog
					open
					className="backdrop-blur-[.15rem] bg-transparent flex items-center justify-center rounded-[3rem]">
					<aside className="bg-white text-black max-w-[95%] flex flex-col items-center justify-center md:w-1/2  md:h-[60vh] rounded-[3rem] shadow-md shadow-black h-full px-10 ">
						<button
							onClick={toggleDialog}
							className=" mx-auto pb-2">
							<img src={close.src} alt="close button" />
						</button>
						<header className=" text-xl md:text-2xl font-bold text-white bg-black/50 rounded-xl py-2 px-4 ">
							{header}
						</header>
						<main className="text-xl font-semibold md:text-4xl py-10 ">
							{main}
						</main>
						<footer>
							<p className="text-xl md:text-2xl font-bold text-white bg-black/50 rounded-full mb-5 size-10 flex items-center justify-center  ">
								{footer}
							</p>
						</footer>
					</aside>
				</dialog>
			)}
		</button>
	);
};

export default CardSpotlight;
