FROM php:8.2-apache

RUN apt-get update && apt-get update
RUN apt-get install -y zlib1g-dev libwebp-dev libpng-dev && docker-php-ext-install gd
RUN apt-get install libzip-dev -y && docker-php-ext-install zip
RUN docker-php-ext-install pdo pdo_mysql

RUN a2enmod rewrite
RUN service apache2 restart

EXPOSE 80