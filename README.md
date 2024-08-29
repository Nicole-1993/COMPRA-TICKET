comandos para subir cambios
git checkout -b tu-rama # primero crea tu rama
# ... realiza tus cambios ...
git add . # agrega los archivos al rastreo de git
git commit -m "mensaje" # añadir cambios
git push -u origin tu-rama # subir cambios a tu rama remota

# solicitar el pull request en el boton verde del repositorio de github
comandos para obtener los ultimos cambios de la rama main en tu rama
git checkout main # cambia a la rama main
git pull # obtener los ultimos cambios
git checkout tu-rama # cambia a tu rama
git merge main # combinar cambios actualizados de main a tu rama
