/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			animation: {
				"border-width": "border-width 3s infinite alternate",
			},
			keyframes: {
				"border-width": {
					from: {
						width: "10px",
						opacity: "0",
					},
					to: {
						width: "100px",
						opacity: "1",
					},
				},
			},
		},
	},
	plugins: [],
};
