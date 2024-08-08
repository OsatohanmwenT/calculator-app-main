/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bgMain: 'var(--bg-main)',
      bgToggle: 'var(--bg-toggle)',
      bgScreen: 'var(--bg-screen)',
      keyBg: 'var(--key-bg)',
      keyShadow: 'var(--key-shadow)',
      keyBgS: 'var(--key-bg-special)',
      keyShadowS: 'var(--key-shadow-special)',
      keyBgOrange: 'var(--key-bg-orange)',
      keyShadowOrange: 'var(--key-shadow-orange)',
      keyBgKey: 'var(--key-bg-key)',
      keyShadowKey: 'var(--key-shadow-key)',
      textPrimary: 'var(--text-primary)',
      textSecondary: 'var(--text-secondary)',
      header: "var(--header)",
      white: "var(--white)"
    },
    extend: {},
  },
  plugins: [],
}