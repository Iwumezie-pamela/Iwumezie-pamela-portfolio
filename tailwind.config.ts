import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light_bg: "#f3f9fc"
      },
      backgroundImage: {
        "banner": "url('/pam.jpg')",
      },
      animation: {
        'bounce-slowInv': 'bounceInv 10s infinite',
        'bounce-slow': 'bounce 5s infinite',
        'bounce-medium': 'bounce 5.5s infinite',
        'bounce-fast': 'bounce 2.5s infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        slideUp: 'slideUp 0.3s ease-in-out',
        slideDown: 'slideDown 0.3s ease-in-out',
        slideInFromLeft: 'slideInFromLeft 0.5s ease forwards',
        slideOutToLeft: 'slideOutToLeft 0.5s ease forwards',
        'custom-bounce':
          'custom-bounce 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.27)',
      },

      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceInv: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutToLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        'custom-bounce': {
          from: {
            top: '0',
            opacity: '0',
          },
        },
      }
    },
  },
  plugins: [],
};
export default config;
