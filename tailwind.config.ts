import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        cpDark: '#262837',
        bodyDark: '#14121e',
        light: '#fff',
        bodyLight: '#fafafa',
        Blog: {
          Gary: {
            50: '#F7FAFC',
            100: '#EDF2F7',
            200: '#E2E8F0',
            300: '#CBD5E0',
            400: '#A0AEC0',
            500: '#718096',
            600: '#4A5568',
            700: '#2D3748',
            800: '#1A202C',
            900: '#171923'
          },
          Teal: {
            50: '#E6FFFA',
            100: '#B2F5EA',
            200: '#81E6D9',
            300: '#4FD1C5',
            400: '#38B2AC',
            500: '#319795',
            600: '#2C7A7B',
            700: '#285E61',
            800: '#234E52',
            900: '#1D4044'
          },
          Blue: {
            50: '#EBF8FF',
            100: '#CEEDFF',
            200: '#90CDF4',
            300: '#63B3ED',
            400: '#4299E1',
            500: '#3182CE',
            600: '#2A69AC',
            700: '#1E4E8C',
            800: '#153E75',
            900: '#1A365D'
          },
          Cyan: {
            50: '#EDFDFD',
            200: '#9DECF9',
            300: '#76E4F7',
            400: '#0BC5EA',
            500: '#00B5D8',
            600: '#00A3C4',
            700: '#0987A0',
            800: '#086F83',
            900: '#065666'
          },
          Success: '#027A48',
          Waryning: '#B54708',
          Error: '#B42318',
          blue: '#3182CE'
        }
      },
      backgroundImage: {
        'primary-blue-gradient-to-t': 'linear-gradient(to top, #3182CE, #63B3ED)',
        'primary-black-gradient-to-t': 'linear-gradient(to top, #313860, #151928)',
        topBg: "url('/assets/Background@1x.png')"
      },
      screens: {
        xs: '400px'
      },
      boxShadow: {
        rightShadow: '0 0 2px rgba(0,0,0,0.1)'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    iconsPlugin({
      collections: getIconCollections(['fa-brands', 'ri'])
    })
  ]
}
export default config
