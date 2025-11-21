# 🚀 How to Run Your Portfolio

## Quick Start (Choose One Method)

### Method 1: Double-Click Script (Easiest) ⭐

**Windows:**
- Double-click `start-server.bat`
- Wait for the server to start
- Browser will show the app at `http://localhost:5173`

**PowerShell:**
- Right-click `start-server.ps1` → Run with PowerShell
- Or run: `.\start-server.ps1`

### Method 2: Manual Commands

1. **Open Terminal/Command Prompt** in this folder:
   ```bash
   cd "D:\My project\ProtfolioWebApp"
   ```

2. **Start the server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Go to: `http://localhost:5173`

## ✅ What You Should See

When the server starts successfully, you'll see:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## 🔍 Troubleshooting

### Server Not Starting?

1. **Check if Node.js is installed:**
   ```bash
   node --version
   npm --version
   ```
   Should show version numbers.

2. **Check if dependencies are installed:**
   ```bash
   npm install
   ```

3. **Check if port 5173 is free:**
   - Close any other applications using port 5173
   - Or use a different port: `npm run dev -- --port 3000`

### "npm is not recognized"

- Restart your terminal after installing Node.js
- Or restart your computer

### Port Already in Use

The server will automatically try the next available port. Check the terminal output for the actual URL.

## 🛑 To Stop the Server

Press `Ctrl + C` in the terminal where the server is running.

## 📝 Notes

- The server runs in the foreground (you'll see output)
- Keep the terminal window open while using the app
- Changes to files will auto-refresh in the browser
- Dark mode toggle is in the navbar

## 🎯 Next Steps

Once running:
1. Open `http://localhost:5173` in your browser
2. Customize your data in `src/constants/` folder
3. See changes instantly in the browser

