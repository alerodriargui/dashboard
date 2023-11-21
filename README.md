# Dashboard
 
## Información general

Para iniciar el servidor y la aplicación web, necesitaremos instalar algunas bibliotecas de Python si no las tenemos ya en nuestra máquina.

## Instalación
Asegurarse de tener Python instalado en el sistema. Después, podemos instalar las librerías necesarias con el comando:

`pip install Flask pandas`

Este comando instalará `Flask` y `pandas`, que son las bibliotecas utilizadas en nuestro servidor para el desarrollo web y la manipulación de datos. 

## Dataset
Nuestra web carga datos desde un archivo CSV (`universal_top_spotify_songs.csv`).
Este archivo se encuentra en el mismo directorio que nuestro servidor de Python.


## Ejecución del servidor
Después de instalar las bibliotecas y comprobar que tenemos el dataset en el directorio correspondient, podemos ejecutar nuestra aplicación.

El comando para iniciar la aplicación es:
`python app.py`

Esto iniciará el servidor Flask, y se podrá acceder a la aplicación web desde un navegador visitando:
 `http://127.0.0.1:5000/`


 ## Ejemplo
 Cuando se ejecute el servidor y se acceda a la URL indicada en la terminal, deberá aparecer una pantalla como esta:
 
![Texto alternativo](spotifydashboard.png)
 