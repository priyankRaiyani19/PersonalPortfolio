/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                glowBorder: {
                    '0%, 100%': {
                        'text-shadow': '0 0 0px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 8px #fff, 0 0 10px #fff, 0 0 12px #fff, 0 0 14px #fff',
                    },
                    '50%': {
                        'text-shadow': '0 0 4px #fff, 0 0 8px #fff, 0 0 12px #fff, 0 0 16px #fff, 0 0 20px #fff, 0 0 24px #fff, 0 0 28px #fff',
                    },
                },
            },
            animation: {
                glowBorder: 'glowBorder 1.5s ease-in-out infinite alternate',
            },
            fontFamily: {
                signature: ["Ralway"],
            },
        },
        plugins: [],
    }
}







