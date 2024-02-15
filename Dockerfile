FROM php:8.2-apache

# Installe les extensions PHP nécessaires
RUN apt-get update && apt-get install -y \
    zlib1g-dev \
    libwebp-dev \
    libpng-dev \
    libzip-dev \
    && docker-php-ext-install gd zip pdo pdo_mysql

# Active le module rewrite pour Apache
RUN a2enmod rewrite

# Redémarre le service Apache
RUN service apache2 restart

# Définit les variables d'environnement SMTP pour PHP
ENV SMTP_HOST maildev
ENV SMTP_PORT 25

# Expose le port 80
EXPOSE 80
