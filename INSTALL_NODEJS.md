# Installing Node.js - Step by Step Guide

## Why You Need Node.js

Node.js is required to run this React portfolio application. It includes `npm` (Node Package Manager) which is used to install dependencies and run the development server.

## Installation Steps

### Option 1: Official Installer (Recommended)

1. **Visit the Node.js website:**
   - Go to: https://nodejs.org/
   - You'll see two versions:
     - **LTS** (Long Term Support) - Recommended for most users
     - **Current** - Latest features

2. **Download the LTS version:**
   - Click the green "LTS" button
   - This will download the Windows installer (.msi file)

3. **Run the installer:**
   - Double-click the downloaded .msi file
   - Follow the installation wizard
   - **Important:** Make sure "Add to PATH" is checked (it should be by default)
   - Click "Install" and wait for completion

4. **Verify installation:**
   - Open a **new** terminal/command prompt
   - Run: `node --version`
   - Run: `npm --version`
   - You should see version numbers (e.g., v18.17.0 and 9.6.7)

5. **Restart your terminal/IDE:**
   - Close and reopen your terminal
   - If using VS Code, restart it

### Option 2: Using Chocolatey (Windows Package Manager)

If you have Chocolatey installed:

```powershell
choco install nodejs-lts
```

### Option 3: Using Winget (Windows Package Manager)

```powershell
winget install OpenJS.NodeJS.LTS
```

## After Installation

1. **Verify Node.js is installed:**
   ```bash
   node --version
   npm --version
   ```

2. **Navigate to your project:**
   ```bash
   cd "D:\My project\ProtfolioWebApp"
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the application:**
   ```bash
   npm run dev
   ```

## Troubleshooting

### "npm is not recognized"

**Solution:**
- Restart your terminal/command prompt
- Restart your computer if needed
- Verify Node.js is in PATH:
  ```powershell
  $env:PATH -split ';' | Select-String -Pattern 'node'
  ```

### Installation fails

**Solution:**
- Make sure you have administrator rights
- Try running terminal as administrator
- Check if antivirus is blocking the installation

### Port already in use

**Solution:**
- The dev server will automatically use the next available port
- Or specify a different port:
  ```bash
  npm run dev -- --port 3000
  ```

## Quick Test

After installing Node.js, run these commands to verify:

```bash
node --version    # Should show: v18.x.x or higher
npm --version     # Should show: 9.x.x or higher
```

## Need Help?

- Node.js Documentation: https://nodejs.org/docs/
- npm Documentation: https://docs.npmjs.com/
- Check the SETUP.md file in this project for more details

## Next Steps

Once Node.js is installed:

1. Use the provided scripts:
   - **Windows:** Double-click `install-and-run.bat`
   - **PowerShell:** Run `.\install-and-run.ps1`

2. Or manually:
   ```bash
   npm install
   npm run dev
   ```

The application will start at `http://localhost:5173`

