FROM node:12.18.1-alpine3.9 as BUILD

RUN mkdir /app

WORKDIR /app

ADD package.json .
ADD package-lock.json .

RUN npm install

ADD . .

RUN npm run build --configuration=production

FROM nginx:alpine

COPY --from=BUILD /app/dist/appprueba /usr/share/nginx/html
COPY --from=BUILD /app/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"]

