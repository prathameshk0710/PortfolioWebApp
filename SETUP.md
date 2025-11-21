# Setup Guide

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## Installation Steps

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

or if you're using yarn:

```bash
yarn install
```

This will install all required dependencies including:
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

### 2. Start Development Server

After installation, start the development server:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:5173`

### 3. Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### 4. Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Troubleshooting

### npm command not found

If you get an error that `npm` is not recognized:

1. Verify Node.js is installed:
   ```bash
   node --version
   ```

2. If Node.js is not installed, download and install it from [nodejs.org](https://nodejs.org/)

3. After installing Node.js, restart your terminal

### Port already in use

If port 5173 is already in use, Vite will automatically try the next available port. You can also specify a different port:

```bash
npm run dev -- --port 3000
```

### Module not found errors

If you encounter module not found errors:

1. Delete `node_modules` folder
2. Delete `package-lock.json` (if exists)
3. Run `npm install` again

## Development Tips

1. **Hot Module Replacement (HMR)**: Changes are automatically reflected in the browser
2. **Dark Mode**: Toggle dark mode using the button in the navbar
3. **Responsive Design**: Test on different screen sizes using browser dev tools
4. **Code Organization**: Follow the structure in `PROJECT_STRUCTURE.md`

## Next Steps

1. Customize personal information in `src/constants/personalInfo.js`
2. Update social media links in `src/constants/socialLinks.js`
3. Add your projects in `src/constants/projects.js`
4. Update education and experience in respective constant files
5. Customize colors in `tailwind.config.js` if needed

