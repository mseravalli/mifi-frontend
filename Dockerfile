FROM nginx:1.13.7-alpine

RUN mkdir -p /var/www/html

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./dist/ /var/www/html

WORKDIR /var/www/html

EXPOSE 80

MAINTAINER Marco Seravalli <marco.seravalli@gmail.com>
