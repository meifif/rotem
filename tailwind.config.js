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
                accent: 'var(--color-accent)',
                background: 'var(--color-background)',
                'background-alt': 'var(--color-background-alt)',
                text: 'var(--color-text)',
                'text-light': 'var(--color-text-light)',
                border: 'var(--color-border)',
            },
            fontFamily: {
                'primary': ['DM Sans', 'sans-serif'],
                'secondary': ['Cormorant Garamond', 'serif'],
            },
            fontSize: {
                'display': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1' }],
                'heading': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
                'subheading': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.4' }],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '30': '7.5rem',
            },
            letterSpacing: {
                'widest': '0.2em',
                'luxury': '0.15em',
            },
            transitionTimingFunction: {
                'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
            boxShadow: {
                'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'elegant-lg': '0 10px 40px rgba(0, 0, 0, 0.1)',
                'gold': '0 10px 40px rgba(201, 169, 98, 0.2)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease forwards',
                'fade-in': 'fadeIn 1s ease forwards',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gold-gradient': 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%)',
            },
        },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
}
