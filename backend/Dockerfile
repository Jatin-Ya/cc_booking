FROM node

COPY package.json /app/package.json

WORKDIR /app

RUN npm install

COPY . /app

EXPOSE 8000

ENV [PORT = 8000,DATABASE = 'mongodb+srv://21cs02007:Dual%40%402021@cc-booking-db.n9hegsh.mongodb.net/test?retryWrites=true&w=majority',POC_EMAIL = '21cs02007@iitbbs.ac.in',JWT_SECRET = 'this-is-my-secret-it-is-very-secret',JWT_EXPIRES_IN = '15d']

CMD ["npm", "start"]