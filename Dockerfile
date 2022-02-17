#Stage 1 - Build Source Code
FROM node:lts-alpine as builder

LABEL description="App Builder"

USER root

# ARG NPM_AUTH_TOKEN

WORKDIR /@app

COPY . /@app

RUN rm -rf /@app/node_modules

# Setup .npmrc file to credential private npm repo
# RUN echo "@getready:registry=https://registry.npmjs.org" >> .npmrc
# RUN echo "//registry.npmjs.org/:_authToken=$NPM_AUTH_TOKEN" >> .npmrc
# RUN echo "always-auth=true" >> .npmrc

RUN yarn install

RUN yarn build

# Stage 2 - Copy Files for Docker Images
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


COPY --from=builder /@app/build/ /usr/share/nginx/portfolio
COPY --from=builder /@app/build/ /var/www/portfolio

CMD ["/usr/sbin/nginx"]
