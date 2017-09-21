FROM node:8.4.0-alpine

RUN apk update
RUN apk add bash
ADD . /cbm
WORKDIR /cbm
ENTRYPOINT ["npm","start"]
