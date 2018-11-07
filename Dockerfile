  FROM node:8.12

  RUN mkdir -p /usr/src/app

  WORKDIR /usr/src/app

  COPY app/package.json /usr/src/app/
  COPY app/package-lock.json /usr/src/app/

  RUN npm install package.json
  RUN npm install package-lock.json

  COPY ./app /usr/src/app

EXPOSE 7000

CMD node app.js