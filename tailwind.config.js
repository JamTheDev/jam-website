/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: (image) => ({
        'gradient-primary': 'linear-gradient(180deg, #180036 0%, #0D001D 62%, #0A0116 100%)'
      }),

      fontFamily: {
        "metropolis": ["Metropolis"]
      }
    },
  },
  plugins: [],
}

