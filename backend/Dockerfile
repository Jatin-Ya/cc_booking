FROM node

COPY package.json /app/package.json

WORKDIR /app

RUN npm install

COPY . /app

EXPOSE 8000

CMD ["npm", "start"]