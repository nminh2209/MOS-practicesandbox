@echo off
echo Building MOS Practice Sandbox for production...
echo.

REM Build the project
echo 1. Building project...
call npm run build
if errorlevel 1 (
    echo Build failed!
    pause
    exit /b 1
)

echo.
echo 2. Build completed successfully!
echo.
echo Your application is ready for deployment!
echo The built files are in the 'dist' directory.
echo.
echo To deploy to Vercel:
echo 1. Push your code to GitHub
echo 2. Connect your GitHub repo to Vercel
echo 3. Set build command: npm run build
echo 4. Set output directory: dist
echo 5. Deploy!
echo.
pause
