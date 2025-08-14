@echo off
setlocal

echo 🚀 Déploiement PWA vers GitHub Pages...
echo.

:: 1. Commit et push sur main
git add .
git commit -m "Mise à jour"
git push origin main

:: 2. Build du projet
echo 📦 Construction du build Angular...
ng build --configuration production --base-href "https://Mattheus312.github.io/raposa_aventuras/"

:: 3. Déploiement sur gh-pages
echo 📤 Publication sur GitHub Pages...
git subtree split --prefix dist/raposa-aventuras/browser -b gh-pages-deploy
git push origin gh-pages-deploy:gh-pages --force
git branch -D gh-pages-deploy

echo ✅ Déploiement terminé !
echo 🌍 https://Mattheus312.github.io/raposa-aventuras/

pause
