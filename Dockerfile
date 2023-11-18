FROM httpd:2.4

#COPY  style.css  ./var/www/html/css

# Copy virtual host into container

COPY ./SportifyV2/ /usr/local/apache2/htdocs/

#