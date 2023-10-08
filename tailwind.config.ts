import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        foreground: '#d4d4d4',
        background: '#08070B',
        input: '#131415',
      },
    },
    screens: {
      sm: '100px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    lineHeight: {
      relaxed: '1.8',
    },
    fontFamily: {
      poppins: 'var(--font-default)',
      title: 'var(--font-title)',
    },
  },
  plugins: [],
}
export default config
