FROM centos:7
LABEL version=1.0
LABEL description="Esta es una imagen de Apache"
LABEL vendor="Sergio"

RUN yum install httpd -y
WORKDIR /var/www/html
COPY fluffster .
COPY run.sh /run.sh

RUN echo "$(whoami)" > ./user1.html

RUN useradd sergio
RUN chown -R sergio .

USER sergio

RUN echo "$(whoami)" > ./user2.html

VOLUME [ "/var/www/html" ]

USER root

EXPOSE 80

CMD [ "sh", "/run.sh" ]