@echo off
echo ========================================
echo Portfolio Web App - Setup ^& Run Script
echo ========================================
echo.

REM Check if Node.js is installed
echo Checking for Node.js...
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed or not in PATH
    echo.
    echo Please install Node.js first:
    echo 1. Visit: https://nodejs.org/
    echo 2. Download the LTS version
    echo 3. Run the installer
    echo 4. Restart your terminal
    echo 5. Run this script again
    echo.
    pause
    exit /b 1
)

node --version
npm --version
echo.

REM Check if node_modules exists
if exist "node_modules" (
    echo Dependencies already installed.
    echo.
) else (
    echo Installing dependencies...
    echo This may take a few minutes...
    echo.
    
    call npm install
    
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo [ERROR] Installation failed!
        echo Please check the error messages above.
        pause
        exit /b 1
    )
    
    echo.
    echo Dependencies installed successfully!
    echo.
)

REM Start the development server
echo Starting development server...
echo.
echo The app will open at: http://localhost:5173
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

call npm run dev

