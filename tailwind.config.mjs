/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // SXSW 2026 Brand Palette
        sxsw: {
          green: '#12674A',       // Primary accent (verdant green)
          'green-light': '#2E8B57', // Hover states, secondary CTAs
          coral: '#F97C3C',       // CTAs, highlights, pull quotes
          periwinkle: '#6C7EB7',  // Secondary category tags
          dark: '#0A0A0A',        // Hero backgrounds, contrast sections
          light: '#F7F5F0',       // Page background (warm off-white)
          'light-alt': '#F0EEEA', // Alternate section background
          charcoal: '#1A1A1A',    // Primary text
          gray: '#6B6B6B',        // Secondary text, captions
          'gray-border': '#E0E0E0', // Dividers
        },
        // Track badge colors
        track: {
          'tech-ai': '#50AFE8',
          'music': '#C0392B',
          'film-tv': '#D4A017',
          'design': '#12674A',
          'brand-marketing': '#F97C3C',
          'health': '#2E8B57',
          'culture': '#6C7EB7',
          'startups': '#D4A017',
          'sports-gaming': '#C0392B',
          'workplace': '#50AFE8',
          'cities-climate': '#2E8B57',
          'creator-economy': '#F97C3C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Type scale matching Figma Make prompts
        'hero': ['64px', { lineHeight: '1.1', fontWeight: '800' }],
        'page-title': ['56px', { lineHeight: '1.15', fontWeight: '700' }],
        'section-title': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'section-heading': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        'card-title': ['22px', { lineHeight: '1.3', fontWeight: '700' }],
        'card-subtitle': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'caption': ['12px', { lineHeight: '1.4' }],
        'label': ['12px', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0.08em' }],
        'stat': ['48px', { lineHeight: '1', fontWeight: '800' }],
      },
      borderRadius: {
        'card': '8px',
        'tag': '4px',
      },
      maxWidth: {
        'content': '1200px',
        'prose': '800px',
      },
      spacing: {
        'section': '96px',  // Between major sections
        'subsection': '48px', // Between content blocks
        'card-gap': '24px',  // Between cards in a grid
      },
    },
  },
  plugins: [],
}
