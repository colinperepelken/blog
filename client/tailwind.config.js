// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            ...colors,
            primary: colors.purple,
            secondary: colors.orange,
        },
    },
    plugins: [],
}
