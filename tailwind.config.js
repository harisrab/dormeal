module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				darkBrown: "#9F3E1F",
				lightBrown: "#F4F4E7",
			},
			fontFamily: {
				title: ["Satisfy", "cursive"],
				roboto: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				dormeal: {
					primary: "#9F3E1F",
					"primary-focus": "#c9532c",
					"primary-content": "#ffffff",

					secondary: "#f000b8",
					"secondary-focus": "#bd0091",
					"secondary-content": "#ffffff",

					accent: "#F4F4E7",
					"accent-focus": "#2ba69a",
					"accent-content": "#ffffff",

					neutral: "#3b424e",
					"neutral-focus": "#2a2e37",
					"neutral-content": "#ffffff",

					"base-100": "#ffffff",
					"base-200": "#f9fafb",
					"base-300": "#ced3d9",
					"base-content": "#1e2734",

					info: "#1c92f2",
					success: "#009485",
					warning: "#ff9900",
					error: "#ff5724",

					"--rounded-box": "1rem",
					"--rounded-btn": "0.5rem",
					"--rounded-badge": "1.9rem",

					"--animation-btn": "0.25s",
					"--animation-input": "0.2s",

					"--btn-text-case": "uppercase",
					"--navbar-padding": "0.5rem",
					"--border-btn": "1px",
				},
			},
		],
	},
};
