@echo off
setlocal enabledelayedexpansion

echo Déploiement PWA vers GitHub Pages...
echo.

:: 1. Commit et push sur main
echo Étape 1 : Commit et push sur main
git add .
git commit -m "Mise à jour" || echo Pas de modifications à committer
git push origin main || echo Erreur lors du push sur main

echo.
:: 2. Build du projet
echo Étape 2 : Construction du build Angular...
ng build --configuration production --base-href "https://Mattheus312.github.io/raposa_aventuras/" || (
    echo Erreur lors du build Angular
    pause
    exit /b 1
)

echo.
:: Vérification du dossier build
set BUILD_DIR=dist/raposa-aventuras/browser
if not exist "!BUILD_DIR!" (
    echo Dossier de build non trouvé : !BUILD_DIR!
    pause
    exit /b 1
)

:: 3. Déploiement sur gh-pages
echo Étape 3 : Publication sur GitHub Pages...
git subtree split --prefix "!BUILD_DIR!" -b gh-pages-deploy || (
    echo Erreur lors de la création de la branche temporaire
    pause
    exit /b 1
)

git push origin gh-pages-deploy:gh-pages --force || echo Erreur lors du push sur gh-pages
git branch -D gh-pages-deploy || echo Impossible de supprimer la branche temporaire

echo.
echo Déploiement terminé !
echo https://Mattheus312.github.io/raposa_aventuras/

pause
