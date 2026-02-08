@echo off
TITLE Portfolio Setup Script

echo ============================================
echo   Setting up Vaishnavi's Portfolio Website
echo ============================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [X] Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo [✓] Node.js is installed
node --version
echo.

REM Setup Frontend
echo ============================================
echo Installing Frontend Dependencies...
echo ============================================
cd frontend
call npm install

if %errorlevel% neq 0 (
    echo [X] Failed to install frontend dependencies
    pause
    exit /b 1
)

echo [✓] Frontend dependencies installed successfully!
cd ..
echo.

REM Setup Backend
echo ============================================
echo Installing Backend Dependencies...
echo ============================================
cd backend
call npm install

if %errorlevel% neq 0 (
    echo [X] Failed to install backend dependencies
    pause
    exit /b 1
)

echo [✓] Backend dependencies installed successfully!

REM Create .env file if it doesn't exist
if not exist .env (
    echo Creating .env file...
    copy .env.example .env
    echo [!] Please edit backend\.env and add your email credentials
)

cd ..
echo.

echo ============================================
echo   Setup Complete!
echo ============================================
echo.
echo Next Steps:
echo 1. Edit backend\.env with your email credentials
echo 2. Start backend: cd backend ^&^& npm run dev
echo 3. Start frontend: cd frontend ^&^& npm run dev
echo 4. Open http://localhost:3000 in your browser
echo.
echo Need help? Contact: vaishvi.sisodiya28@gmail.com
echo ============================================
pause
