# Based on https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:8.9.3

ARG port=3000
ARG dbConnectionString=undefined
ARG dbName=undefined

RUN echo "PORT: $port"
RUN echo "DB_CONNECTION_STRING: $dbConnectionString"
RUN echo "DB_NAME: $dbName"

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

ENV PORT ${port}
ENV DB_CONNECTION_STRING ${dbConnectionString}}
ENV DB_NAME ${dbName}}

EXPOSE ${port}

CMD [ "npm", "start" ]