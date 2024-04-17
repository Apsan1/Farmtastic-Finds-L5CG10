@echo off

echo "🚀 Installing Node.js..."
winget install nodejs
cd ..
cd frontend
cd vite-project
npm install package.json

echo "🎉 Frontend installed successfully! Enjoy coding! 😎"
