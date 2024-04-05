"use client";
import { useRef, useState } from "react";

const CardSpotlight = ({ header, main, footer, img }) => {
	const divRef = useRef(null);
	const [isFocused, setIsFocused] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [opacity, setOpacity] = useState(0);

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

	return (
		<div
			ref={divRef}
			onMouseMove={handleMouseMove}
			onFocus={handleFocus}
			onBlur={handleBlur}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[3rem] bg-white p-10 hover:cursor-crosshair">
			<div
				className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
				style={{
					opacity,
					background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,0,0,.1), transparent 40%)`,
				}}
			/>
			<article className=" h-full w-full flex flex-col justify-between py-12">
				<header className="text-3xl font-black text-black">
					{header}
				</header>
				<main className="text-base text-black">{main}</main>
				<footer className="text-sm text-black"> {footer}</footer>
			</article>
			<img
				src={img}
				alt={`image of ${img}`}
				className="w-auto max-h-[300px]
				absolute bottom-0 right-0 transform  opacity-5 pointer-events-none rotate-[25deg] "
			/>
		</div>
	);
};

export default CardSpotlight;
