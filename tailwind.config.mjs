/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'xs': '480px',
            // => @media (min-width: 480px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1440px',
            // => @media (min-width: 1440px) { ... }

			'3xl': '1920px'
			// => @media (min-width: 1920px) { ... }
        },
		container: {
            center: true,
            padding: {
				DEFAULT: '255px'
                // DEFAULT: '40px',
                // sm: '60px',
                // md: '80px',
                // lg: '100px',
                // xl: '130px'
            },
        },
		fontFamily: {
            'roboto-slab': ['Roboto Slab', 'sans-serif'],
            'creepster': ['creepster']
        },
		extend: {
			colors: {
				'background-purple': '#160D3B',
                'dark-purple': '#0B071E',
				'light-purple': '#DBDEFF',
				'light-purple-button': '#EBEDFF',
				'light-pink': '#FCEBF9',
				'svg-light-purple': '#BDC1FF',
				'svg-light-pink': '#F9D5F4',
                'yellow': '#E4B02A'
			},
            backgroundImage: {
                'btn-host': `
                    url('/img/btn-host-tl-grass.svg'),
                    url('/img/btn-host-br-grass.svg'),
                    linear-gradient(to bottom right, var(--tw-gradient-stops))
                `,
                'video': `url('/img/video/bg-video.png')`,
                'video-section': `
                    url('/img/video/bg-video-grass.svg'),
                    url('/img/video/bg-video-bricks.png')
                `,
                'video-character': `url('/img/video/character.png')`
            },
            backgroundPosition: {
                'btn-host': 'top 2.5px left 11.75px, bottom 0 right 17.25px, 100%',
                'video': 'center center',
                'video-section': 'top 0 left 32%, bottom 0 left 16%'
            },
		},
	},
	plugins: [],
}
