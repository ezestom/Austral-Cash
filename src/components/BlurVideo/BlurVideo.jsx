import { useState } from "react";
import play from "../../icons/play.svg";
import video1 from "../../video/previewInstitutional.mp4";
import close from "../../icons/x.svg";
import "./BlurVideo.css";

export function BlurVideo() {
	const [isOpen, setIsOpen] = useState(false);

	const openDialog = () => {
		setIsOpen(true);
		// stop scroll
		document.body.style.overflowY = "hidden";
	};
	const closeDialog = () => {
		setIsOpen(false);
		// remove overflow hidden
		document.body.style.overflowY = "auto";
	};

	return (
		<article className="relative">
			<button onClick={openDialog}>
				<img
					src={play.src}
					alt="btn-img"
					className="absolute m-auto top-0 bottom-0 right-0 left-0 bg-gradient-to-r from-[#13151a] to-[black] rounded-lg border border-[#4e737a]  z-20 p-2 hover:scale-105 transition  "
				/>
				<video
					className="relative max-h-screen  w-full rounded-lg border border-[#4b5563] shadow-md z-10 max-w-[90%] md:max-w-[65%] aspect-video mx-auto revealing-image  "
					src={video1}
					loop
					muted
					autoPlay></video>
			</button>
			{isOpen && (
				<dialog
					open
					className="z-50 fixed h-screen w-screen top-0 left-0 bg-transparent backdrop-blur">
					<iframe
						className="m-auto bottom-0 top-0 left-0 right-0 absolute p-1 w-[95%] md:w-[50%] aspect-video rounded-lg border border-[#4e737a] shadow-2xl bg-black"
						src="https://www.youtube.com/embed/DZZiAAm1rWs?si=G8SFAN_AP1Ic3qmr-&vq=hd1080&autoplay=1&mute=0"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen></iframe>

					<button
						className="fixed right-0 left-0 m-auto max-w-8 text-center w-auto top-20 bg-gradient-to-r from-[#030f33] to-[black] rounded-lg border border-[#4e737a]  z-80 p-1 close-button "
						onClick={closeDialog}>
						<img src={close.src} alt="close button" />
					</button>
				</dialog>
			)}
		</article>
	);
}
