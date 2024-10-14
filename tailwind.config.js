module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                'primary-light': 'var(--color-primary-light)',
                secondary: 'var(--color-secondary)',
                'secondary-light': 'var(--color-secondary-light)',
                background: 'var(--color-background)',
                text: 'var(--color-text)',
            },
            fontFamily: {
                'primary': 'var(--font-primary)',
                'secondary': 'var(--font-secondary)',
            },
        },
    },
    plugins: [],
}