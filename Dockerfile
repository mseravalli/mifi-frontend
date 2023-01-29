FROM nginx

RUN mkdir -p /var/www/html

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./dist/ /var/www/html

RUN chmod 755 -R /var/www/html

WORKDIR /var/www/html

EXPOSE 80

MAINTAINER Marco Seravalli <marco.seravalli@gmail.com>
