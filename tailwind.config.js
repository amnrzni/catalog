/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Glassmorphism palette
        glass: {
          bg: 'rgba(255, 255, 255, 0.08)',
          'bg-strong': 'rgba(255, 255, 255, 0.12)',
          'bg-light': 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.18)',
          'border-strong': 'rgba(255, 255, 255, 0.25)',
          'border-light': 'rgba(255, 255, 255, 0.12)',
        },
        accent: {
          primary: '#5B9FFF',
          secondary: '#A78BFA',
          success: '#34D399',
          warning: '#FBBF24',
          danger: '#F87171',
          pink: '#F472B6',
        },
        text: {
          primary: 'rgba(255, 255, 255, 0.95)',
          secondary: 'rgba(255, 255, 255, 0.70)',
          tertiary: 'rgba(255, 255, 255, 0.45)',
        },
      },
      spacing: {
        xs: '6px',
        sm: '10px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
      },
      borderRadius: {
        sm: '10px',
        md: '16px',
        lg: '20px',
        xl: '24px',
      },
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '60px',
        '2xl': '100px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.2)',
        'glass-strong': '0 12px 48px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
