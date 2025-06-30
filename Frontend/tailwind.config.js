/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'palette-main': '#D9B075',
                'sub-color': '#0099B1',
                'text-color': '#757575',
                'bg-color-site': '#ffffff',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'gabarito': ['Gabarito', 'sans-serif'],
                'great-vibes': ['Great Vibes', 'cursive'],
            },
            animation: {
                'bounce': 'bounce 1.75s infinite',
                'typing': 'typing 2s steps(20, end)',
                'blink-caret': 'blink-caret .75s step-end infinite',
            },
            keyframes: {
                bounce: {
                    '0%, 20%, 50%, 80%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '40%': {
                        transform: 'translateY(-20px)',
                    },
                    '60%': {
                        transform: 'translateY(-10px)',
                    },
                },
                typing: {
                    from: {
                        width: '0'
                    },
                    to: {
                        width: '100%'
                    }
                },
                'blink-caret': {
                    'from, to': {
                        'border-color': 'transparent'
                    },
                    '50%': {
                        'border-color': 'white'
                    }
                }
            },
            screens: {
                'xs': '475px',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        },
    },
    plugins: [],
}