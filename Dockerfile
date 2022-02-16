# Portfolio Dockerfile
FROM ubuntu:latest

LABEL MAINTAINER Justin Graber <jpg013@gmail.com>

USER root

RUN apt-get update
RUN apt-get install -y nginx

# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf
RUN rm -v /etc/nginx/sites-enabled/default

# Copy a configuration file from the current directory
COPY nginx/nginx.conf /etc/nginx/
COPY nginx/sites-enabled/ /etc/nginx/sites-enabled/

# Append "daemon off;" to the beginning of the configuration
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Expose ports
EXPOSE 80

COPY ./build/ /usr/share/nginx/portfolio
COPY ./build/ /var/www/portfolio

CMD ["/usr/sbin/nginx"]
