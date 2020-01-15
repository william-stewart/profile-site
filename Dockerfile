FROM node:10-alpine

COPY ./portfoliojs/package*.json ./

RUN npm install

COPY ./portfoliojs ./

EXPOSE 8081

CMD [ "npm", "start", "Server.js" ]
