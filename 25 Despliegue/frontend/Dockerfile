FROM node:12.19.1-alpine3.10

LABEL version="1.0.0"
ARG basedir="frontend"
ENV NODE_ENV production
WORKDIR ${basedir}/ .

COPY ${basedir}/package*.json ./

RUN npm install --silent

COPY ${basedir}/ .

RUN apk update && apk add bash

EXPOSE 9000

CMD ["npm", "start"]