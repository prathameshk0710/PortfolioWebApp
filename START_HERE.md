# 🚀 START HERE - Get Your Portfolio Running

## ⚠️ Important: Node.js Required

**Node.js is not currently installed on your system.** You need to install it first before running this application.

## Quick Installation Guide

### Step 1: Install Node.js (5 minutes)

1. **Download Node.js:**
   - Visit: **https://nodejs.org/**
   - Click the big green **"LTS"** button (recommended version)
   - This downloads the Windows installer

2. **Install Node.js:**
   - Double-click the downloaded `.msi` file
   - Click "Next" through the installation wizard
   - **Make sure "Add to PATH" is checked** (it should be by default)
   - Click "Install"
   - Wait for installation to complete

3. **Verify Installation:**
   - Close and reopen your terminal/command prompt
   - Type: `node --version`
   - Type: `npm --version`
   - You should see version numbers (e.g., v18.17.0)

### Step 2: Run the Application

**Option A: Use the automated script (Easiest)**

1. **Double-click** `install-and-run.bat` (Windows)
   - OR run `.\install-and-run.ps1` in PowerShell

2. The script will:
   - Check if Node.js is installed
   - Install all dependencies automatically
   - Start the development server
   - Open the app in your browser

**Option B: Manual commands**

1. Open terminal in this folder:
   ```bash
   cd "D:\My project\ProtfolioWebApp"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

4. Open browser:
   - Go to: `http://localhost:5173`

## 📋 What Gets Installed

When you run `npm install`, these packages will be installed:

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## ✅ Success Indicators

You'll know it's working when you see:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## 🎯 What You'll See

Once running, your portfolio will show:
- ✨ Beautiful hero section with your name
- 📱 Fully responsive design
- 🌙 Dark mode toggle
- 🎭 Smooth animations
- 📧 Contact form
- 🔗 Social media links

## 🆘 Need Help?

1. **Node.js not installing?**
   - See: `INSTALL_NODEJS.md` for detailed steps
   - Make sure you have administrator rights

2. **npm command not found?**
   - Restart your terminal after installing Node.js
   - Restart your computer if needed

3. **Port already in use?**
   - Vite will automatically use the next available port
   - Check the terminal for the actual URL

4. **Installation errors?**
   - Delete `node_modules` folder (if exists)
   - Run `npm install` again

## 📚 Documentation

- **INSTALL_NODEJS.md** - Detailed Node.js installation guide
- **SETUP.md** - Complete setup instructions
- **QUICK_START.md** - Quick reference guide
- **README.md** - Full project documentation

## 🎉 After It's Running

1. **Customize your data:**
   - Edit files in `src/constants/` folder
   - Update personal info, projects, experience, etc.

2. **See it live:**
   - The app auto-refreshes when you make changes
   - Dark mode toggle is in the navbar

3. **Build for production:**
   ```bash
   npm run build
   ```

---

**Ready to start? Install Node.js first, then run the script!** 🚀

