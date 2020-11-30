FROM node:12.19.1-alpine3.10

LABEL version="1.0.0"
ARG basedir="backend1"
ENV NODE_ENV production
WORKDIR ${basedir}/ .

COPY ${basedir}/package*.json ./

RUN npm install --silent

COPY ${basedir}/ .

RUN apk update && apk add bash

EXPOSE 9010

CMD ["npm", "start"]