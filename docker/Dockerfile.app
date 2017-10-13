FROM node:8.7

RUN mkdir -p /root/app
WORKDIR /root/app
ADD . /root/app

RUN yarn install
RUN npm rebuild node-sass --force
