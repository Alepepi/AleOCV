# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Certainly! Here's your README content formatted in Markdown:

# Installation
## Install Tailwind CSS with Vite
Setting up Tailwind CSS in a Vite project.

### Install Tailwind CSS
Install `tailwindcss` and its peer dependencies, then generate your `tailwind.config.js` and `postcss.config.js` files.

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Add the Tailwind directives to your CSS
Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/index.css` file.

**index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Start your build process
Run your build process with `npm run dev`.

**Terminal**

```sh
npm run dev
```

Reference in [Tailwind CSS Docs](https://tailwindcss.com/docs/guides/vite)

## For React-icons
Installation (for standard modern project)

```sh
npm install react-icons --save
```

Reference in [React-icons Docs](https://react-icons.github.io/react-icons/)

## For Motion
```sh
npm install framer-motion
```

Reference in [Framer Motion Docs](https://www.framer.com/motion/introduction/)

## For Google Fonts
**index.css**

```css
@import url("Respective font");

:root {
  font-family: "Inter", sans-serif;
}
```

This can change to:
1. Go to [Google Fonts](https://fonts.google.com/selection/embed)
2. Get font
3. Get embed code 
4. Choose the web and `@import`
5. Copy

Reference in [Google Fonts Docs](https://fonts.google.com/selection/embed)
```

Feel free to copy this Markdown content and use it in your project's README.md file.