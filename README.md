# Programmer Portfolio GlassUI

A modern, responsive, glassmorphism-based programmer portfolio website with bordered UI elements, RTL Arabic and LTR English language support, and a clean, professional structure.

## Project Overview

- Semantic HTML5 structure
- Responsive mobile-first layout
- Glassmorphism with bordered UI
- Dual-language support (Arabic RTL + English RTL)
- Placeholder images with easy replacement workflow
- Simple, organized JavaScript for translations, menu toggle, and smooth scrolling

## Project Structure

- index.html
- assets/css/style.css
- assets/js/main.js
- README.md
- README-images.md
- assets/images/ (placeholders)

## How to Add Images

- Replace all placeholder images under assets/images/ with your assets.
- Refer to the placeholders in HTML, they will be automatically picked up.

## How to Change Text / Language Switching

- Text content is provided in the translations dictionary inside assets/js/main.js.
- Language switch is at the header as a button. It toggles between Arabic and English and updates the page text dynamically.

## How Language Switching Works

- The site uses a simple dictionary with keys that map to each language.
- On language switch, applyTranslations(lang) updates all elements with data-i18n attributes.
- Arabic uses dir="rtl" and English uses dir="ltr".

## How to Customize the Design

- Modify CSS variables in assets/css/style.css for quick color/theme changes.
- The design uses glass-like panels with subtle borders and soft shadows.

## How to Deploy

- Netlify: Push to GitHub, connect repository to Netlify and set the build as a static site.
- Vercel: Deploy as a static site, provide the repository and ensure no server-side code.
- GitHub Pages: Enable GitHub Pages on main branch or gh-pages, point to root.

## Notes

This is a complete, deployable static website project with placeholder assets and multi-language support. Replace placeholders with real content as needed.
