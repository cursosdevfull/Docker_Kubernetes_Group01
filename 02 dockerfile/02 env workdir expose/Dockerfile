FROM centos:7

RUN yum install httpd -y

COPY fluffster /var/www/html

ENV connectionString=user@123456

WORKDIR /var/www/html
RUN echo "$connectionString" > ./test.html

EXPOSE 80

CMD [ "apachectl", "-DFOREGROUND" ]