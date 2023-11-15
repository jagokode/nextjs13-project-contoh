/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['var(--font-roboto)', 'sans-serif'],
				sans: ['var(--font-exo2)', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
