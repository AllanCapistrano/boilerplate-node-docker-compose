FROM node:16.15-alpine3.14

WORKDIR /usr/app

COPY package*.json ./
RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]