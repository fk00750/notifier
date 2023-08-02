FROM node:18-alpine

RUN apk add nano

WORKDIR /usr/src/app

COPY package.json .
#COPY package-lock.json .
RUN npm install --force
COPY . .

EXPOSE 9900

CMD ["npm","run","start"]