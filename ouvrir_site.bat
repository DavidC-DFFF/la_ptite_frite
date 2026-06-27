@echo off
cd /d "%~dp0"
start "La P'tite Frite - serveur local" cmd /k "npm run dev"
timeout /t 3 /nobreak >nul
start "" "http://127.0.0.1:5174/"
