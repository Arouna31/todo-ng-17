# Défintion de la variable qui contient la version du node voulu
ARG node_version=20.15.1
# Défintion de la variable qui contient le port d'ecoute de l'application
ARG port=3000

# Définition de l'image de base qui doit être utilisée pour crée le containeur
FROM node:${node_version}-alpine

# Création du répertoire de base de travail
WORKDIR /usr/app

# Définition d'un utilisateur de type root
USER root

# Définition d'un utilisateur de type root
EXPOSE ${port}

# Copie des fichiers package.json et package-lock.json dans le répertoire de travail
COPY package.json package-lock.json /usr/app/

# Installation des dépendances en tirant parti du cache de Docker
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    # Installation des dépendances en incluant les dépendances de développement
    npm ci --include=dev

# Copie du reste du dépôt local dans le repertoire de travail
COPY . .

# Définition de la variable d'environnement pour utiliser le polling
ENV CHOKIDAR_USEPOLLING=true

# Lancer l'application 
CMD ["npm", "run", "start"]