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
	};

	return (
		<button
			onClick={toggleDialog}
			className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[3rem] bg-white min-h-[275px] focus:outline-none">
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
					<header className="text-2xl m-auto md:text-5xl font-black text-black">
						{header}
					</header>
					<img
						src={img}
						alt={`image of ${img}`}
						className="w-auto max-h-[350px] absolute bottom-0 right-0 transform opacity-5 pointer-events-none rotate-[25deg]"
					/>
				</article>
			</div>
			{dialogOpen && (
				<dialog
					open
					className="backdrop-blur-sm bg-transparent flex items-center justify-center rounded-[3rem]">
					<button
						onClick={toggleDialog}
						className="absolute top-40 mx-auto  text-gray-700">
						<img src={close.src} alt="close button" />
					</button>
					<aside className="bg-white text-black max-w-[95%] md:w-1/2  md:h-1/2 rounded-[3rem] shadow-xl p-20 ">
						<main className="text-xl font-semibold md:text-4xl  ">
							{main}
						</main>
						<footer className="text-2xl pt-5 font-semibold  ">
							{footer}
						</footer>
					</aside>
				</dialog>
			)}
		</button>
	);
};

export default CardSpotlight;
