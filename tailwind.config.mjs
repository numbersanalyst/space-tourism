import defaultTheme from 'tailwindcss/defaultTheme'


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Barlow', ...defaultTheme.fontFamily.sans],
				condensed: ['Barlow Condensed', ...defaultTheme.fontFamily.sans],
				serif: ['Bellefair', ...defaultTheme.fontFamily.serif],
			},
			colors: {
				main: '#0B0D17',
				accent: '#D0D6F9',
				white: '#FFFFFF',
			},
			boxShadow: {
				circle: '0 0 0 70px rgba(255, 255, 255, 0.15)',
			}
		},
	},
	plugins: [require('tailwind-hamburgers')],
}
