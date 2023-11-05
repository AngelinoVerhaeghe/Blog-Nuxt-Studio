/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./utility/**/*.{js,vue,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        fontFamily: {
            'quicksand': [ 'Quicksand', 'sans-serif' ],
            'merriweather': [ 'Merriweather', 'sans-serif' ]
        },
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        'h1': {
                            fontFamily: 'Merriweather, sans-serif',
                            color: '#fbbf24',
                        },
                        'h2': {
                            fontFamily: 'Merriweather, sans-serif',
                            color: '#fbbf24',
                        },
                        'h3': {
                            fontFamily: 'Merriweather, sans-serif',
                            color: '#fbbf24',
                        },
                        'p': {
                            color: '#FFFFFF',
                        },
                        'p strong': {
                            fontWeight: '600',
                            color: '#FFFFFF'
                        },
                        'blockquote': {
                            fontWeight: '500',
                            fontStyle: 'italic',
                            color: '#06b6d4',
                            borderLeftWidth: '0.25rem',
                            borderLeftColor: '#06b6d4',
                            quotes: '"\\201C""\\201D""\\2018""\\2019"',
                        },
                        'code': {
                            color: '#FFFFFF',
                        },
                        'ul > li::marker': {
                            color: '#fbbf24',
                        },
                        'li': {
                            color: '#FFFFFF',
                        },
                    },
                },
            },
        }
    },
    plugins: [ require('@tailwindcss/typography') ],
}

