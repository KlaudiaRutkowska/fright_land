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
                'middle-purple': '#110B2D',
				'light-purple': '#DBDEFF',
				'light-purple-button': '#EBEDFF',
				'light-pink': '#FCEBF9',
                'pink': '#C039A1',
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
                'video-character': `url('/img/video/character.png')`,
                'shop': `
                    url('/img/bg-shop-grass.svg'),
                    url('/img/bg-shop-bricks.png')
                `,
                'footer-grass': `
                    url('/img/bg-footer-grass1.svg'),
                    url('/img/bg-footer-grass2.svg')
                `,
                'review': `url('/img/reviews/bg-review.png')`,
                'review-grass': `
                    url('/img/reviews/bg-review-grass1.svg'),
                    url('/img/reviews/bg-review-grass2.svg')
                `,
                'horror-movie-section': `url('/img/horror-movies/bg-horror-movie.png')`,
                'horror-movie-character': `url('/img/horror-movies/mummy.png')`,
                'sponsors-section': `
                    url('/img/sponsors/bg-shadow-left.svg'),
                    url('/img/sponsors/bg-shadow-right.svg')
                `,
                'fear-range': `url('/img/fear-range/bg-fear-range.png')`,
                'card-grass': `
                    url('/img/places-gallery/grass1.svg'),
                    url('/img/places-gallery/grass2.svg')
                `,
                'hero': `url('/img/hero/bg-hero.png')`,
                'hero-grass': `
                    url('/img/hero/grass1.svg'),
                    url('/img/hero/grass2.svg')
                `,
                'form-bg': `
                    url('/img/hero/form-grass1.svg'),
                    url('/img/hero/form-grass2.svg'),
                    url('/img/hero/bricks.svg')
                `,
                'form-grass': `
                    url('/img/hero/form-grass3.svg')
                `,
                'select-arrow': `
                    url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.97027 5.64374L5.52527 3.19874C5.23652 2.90999 4.76402 2.90999 4.47527 3.19874L2.03027 5.64374' stroke='%23654AFF' stroke-width='2.25' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.97027 12.3563L5.52527 14.8013C5.23652 15.09 4.76402 15.09 4.47527 14.8013L2.03027 12.3563' stroke='%23654AFF' stroke-width='2.25' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")
                `,
                'form-shadow': `
                    url('/img/hero/form-shadow.svg')
                `,
                'form-vines1': `
                    url('/img/hero/vines1.png')
                `,
                'form-vines2': `
                    url('/img/hero/vines2.png')
                `,
                'form-vines3': `
                    url('/img/hero/vines3.png')
                `,
                'form-pumpkin': `
                    url('/img/hero/pumpkin1.png')
                `
            },
            backgroundPosition: {
                'btn-host': 'top 2.5px left 11.75px, bottom 0 right 17.25px, 100%',
                'btn-search': 'top 0 left 23.78px, bottom -1.26px right 29.24px, 100%, 100%',
                'video': 'center center',
                'video-section': 'top 0 left 32%, bottom 0 left 16%',
                'shop': 'top -7px left 45%, bottom left',
                'footer-grass': 'top -4px left 49%, top -9px center',
                'review': 'bottom 0 center',
                'review-grass': 'top -3px left 10%, bottom -5px right 45%',
                'sponsors-section': 'left 0, right 0',
                'card-grass': 'top -4px left 63px, bottom 116px right -5px',
                'hero-grass': 'top -3px left 40%, bottom -3px right 10%',
                'form-bg': 'top -1px left 7%, bottom -3px right 5%, top 0 left 230px',
                'form-grass': 'top 8px right 10px'
            },
		},
	},
	plugins: [],
}
