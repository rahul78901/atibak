/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.css'],
  theme: {
    colors: {
      primary: 'hsl(var(--primary))',
      secondary: 'hsl(var(--secondary))',
      muted: 'hsl(var(--muted))',
      destructive: 'hsl(var(--destructive))',
    },
    extend: {},
  },
  plugins: [],
};
