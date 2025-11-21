@echo off
echo ========================================
echo Starting Portfolio Development Server
echo ========================================
echo.
echo Installing dependencies (if needed)...
call npm install
echo.
echo Starting server...
echo.
echo The app will be available at: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.
call npm run dev
pause

