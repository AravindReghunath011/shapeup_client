FROM node:19.0.1

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm","run","dev"]