FROM centos:7

RUN yum install httpd -y

COPY fluffster /var/www/html

CMD [ "apachectl", "-DFOREGROUND" ]