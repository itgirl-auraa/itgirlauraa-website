/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: '#C4A3B0', // Soft mauve/rose pink
          dark: '#B08E9B',    // Darker shade for hover
          light: '#DBC3CC',   // Lighter shade for backgrounds
        },
        // Background colors
        background: '#FDFCF8', // Off-white
        'accent-green': '#E8F3E8', // Soft sage green
      },
      fontFamily: {
        // Elegant serif for headings
        display: ['Playfair Display', 'serif'],
        // Clean sans-serif for body text
        sans: ['Poppins', 'sans-serif'],
        // Italic serif for quotes
        serif: ['Libre Baskerville', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        'full': '9999px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#333',
            '--tw-prose-headings': '#333',
            h1: {
              fontFamily: 'Playfair Display, serif',
            },
            h2: {
              fontFamily: 'Playfair Display, serif',
            },
            h3: {
              fontFamily: 'Playfair Display, serif',
            },
            a: {
              color: '#C4A3B0',
              '&:hover': {
                color: '#B08E9B',
              },
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
} 