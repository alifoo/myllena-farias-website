/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'LTInstitute': ['"LTInstitute"', 'sans-serif'],
        'LTRemark': ['"LTRemark"', 'serif'],
        'SatoshiLight': ['Satoshi-Light', 'sans-serif'],
        'SatoshiMedium': ['Satoshi-Medium', 'sans-serif'],
        'SatoshiRegular': ['Satoshi-Regular', 'sans-serif'],
        'SatoshiBold': ['Satoshi-Bold', 'sans-serif'],
        'SatoshiBlack': ['Satoshi-Black', 'sans-serif'],
        'SatoshiItalic': ['Satoshi-Italic', 'sans-serif'],
        'SatoshiBoldItalic': ['Satoshi-BoldItalic', 'sans-serif'],
        'SatoshiBlackItalic': ['Satoshi-BlackItalic', 'sans-serif'],
        'SatoshiVariable': ['Satoshi-Variable', 'sans-serif'],
        'SatoshiVariableItalic': ['Satoshi-VariableItalic', 'sans-serif'],
        'SolideMirage': ['Solide Mirage', 'sans-serif'],
        'SolideMirageEtroit': ['Solide Mirage_Etroit', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  extend: {
    preflight: {
      '@import "tailwindcss/base";': '',
    },
  },
};

