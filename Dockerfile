# Dockerfile

FROM node:latest

RUN apt-get upgrade && apt-get update

ENV APP_HOME /srv/topout/current

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

ADD package.json $APP_HOME

RUN npm install

ADD . $APP_HOME

ENV NODE_ENV          production

EXPOSE 4094
CMD ["npm", "run", "start-prod"]
