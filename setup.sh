#!/bin/bash

# Portfolio Setup Script
# This script will set up both frontend and backend

echo "🚀 Setting up Vaishnavi's Portfolio Website..."
echo "================================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Setup Frontend
echo "📦 Installing Frontend Dependencies..."
cd frontend
npm install

if [ $? -eq 0 ]; then
    echo "✅ Frontend dependencies installed successfully!"
else
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi

cd ..
echo ""

# Setup Backend
echo "📦 Installing Backend Dependencies..."
cd backend
npm install

if [ $? -eq 0 ]; then
    echo "✅ Backend dependencies installed successfully!"
else
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "⚠️  Please edit backend/.env and add your email credentials"
fi

cd ..
echo ""

echo "================================================"
echo "✅ Setup Complete!"
echo ""
echo "📖 Next Steps:"
echo "1. Edit backend/.env with your email credentials"
echo "2. Start backend: cd backend && npm run dev"
echo "3. Start frontend: cd frontend && npm run dev"
echo "4. Open http://localhost:3000 in your browser"
echo ""
echo "📧 Need help? Contact: vaishvi.sisodiya28@gmail.com"
echo "================================================"
