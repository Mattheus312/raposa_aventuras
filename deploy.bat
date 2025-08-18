@echo off
setlocal enabledelayedexpansion

echo Déploiement PWA vers GitHub Pages...

:: Étape 1 : Commit et push sur main
echo Étape 1 : Commit et push sur main
git add .
git commit -m "Mise à jour"
git push origin main

:: Étape 2 : Construction du build Angular
echo Étape 2 : Construction du build Angular
ng build --prod --output-path=dist/raposa-aventuras

:: Étape 3 : Détection automatique du dossier build client
if exist "dist/raposa-aventuras/browser" (
    set BUILD_DIR=dist/raposa-aventuras/browser
) else (
    set BUILD_DIR=dist/raposa-aventuras
)
echo Dossier de build utilisé : !BUILD_DIR!

:: Étape 4 : Déploiement sur GitHub Pages
echo Étape 4 : Déploiement sur GitHub Pages
git subtree split --prefix !BUILD_DIR! -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages

echo Déploiement terminé.
pause
