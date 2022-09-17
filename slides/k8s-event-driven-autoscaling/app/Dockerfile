FROM node:18-alpine

WORKDIR /app

COPY package-lock.json .
COPY package.json .
COPY consumer.js .

RUN npm ci

CMD ["node", "consumer.js"]
