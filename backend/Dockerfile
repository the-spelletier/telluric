FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm i
# RUN npm install -g sequelize-cli
COPY . .

EXPOSE 3000
CMD ["npm","start"]
