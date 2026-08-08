import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bmg: {
          green: '#008c44',
          orange: '#f58220',
          yellow: '#fdb913',
          dark: '#005b33',
        }
      },
    },
  },
  plugins: [],
}
export default config
