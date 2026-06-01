# Usa una versión ligera y oficial de Node.js
FROM node:20-alpine

# Crea la carpeta de la aplicación dentro del servidor en la nube
WORKDIR /usr/src/app

# Copia los archivos de configuración de dependencias
COPY package*.json ./

# Instala Express para levantar el servidor básico
RUN npm install

# Copia el archivo server.js
COPY . .


EXPOSE 3000


CMD [ "npm", "start" ]
