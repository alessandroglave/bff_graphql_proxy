FROM node:14.18-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./
COPY index.js ./

RUN npm ci

EXPOSE 4000

CMD ["npm", "run", "dev"]
