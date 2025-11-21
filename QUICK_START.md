# Quick Start Guide

## 🚀 Running the Application

### Step 1: Install Node.js
If you don't have Node.js installed:
1. Download from [nodejs.org](https://nodejs.org/)
2. Install the LTS version
3. Restart your terminal/command prompt

### Step 2: Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
The app will automatically open at `http://localhost:5173`

## ✅ What's Included

### Features
- ✨ Modern, beautiful UI design
- 🌙 Dark mode toggle
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎭 Smooth animations
- 📧 Contact form
- 🔗 Social media integration

### Sections
- **Hero**: Introduction with social links
- **About**: Personal information and journey
- **Education**: Academic background
- **Experience**: Work experience timeline
- **Tech Stack**: Technologies showcase
- **Projects**: Portfolio projects grid
- **Contact**: Contact form and information

## 📝 Quick Customization

All your data is in `src/constants/` folder:

1. **Personal Info**: Edit `src/constants/personalInfo.js`
2. **Social Links**: Edit `src/constants/socialLinks.js`
3. **Education**: Edit `src/constants/education.js`
4. **Experience**: Edit `src/constants/experience.js`
5. **Projects**: Edit `src/constants/projects.js`
6. **Tech Stack**: Edit `src/constants/techStack.js`

## 🛠️ Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📚 Documentation

- **SETUP.md** - Detailed setup instructions
- **PROJECT_STRUCTURE.md** - Directory structure
- **DEVELOPMENT.md** - Development guidelines
- **README.md** - Full project documentation

## 🎨 Customization Tips

1. **Colors**: Edit `tailwind.config.js` for color scheme
2. **Styling**: Modify Tailwind classes in components
3. **Animations**: Adjust in `src/utils/animations.js`
4. **Theme**: Update `src/config/theme.js`

## ⚠️ Troubleshooting

**npm not found?**
- Install Node.js from nodejs.org
- Restart terminal after installation

**Port already in use?**
- Vite will automatically use next available port
- Or specify: `npm run dev -- --port 3000`

**Module errors?**
- Delete `node_modules` folder
- Run `npm install` again

## 🎯 Next Steps

1. Customize your personal information
2. Add your projects
3. Update social media links
4. Deploy to Vercel/Netlify

Happy coding! 🎉

