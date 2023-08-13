FROM node

WORKDIR /app
COPY ./package.json ./
RUN npm i
COPY ./ ./
RUN npm i react-datepicker
EXPOSE 3000
CMD ["npm", "start"]

