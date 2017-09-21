FROM node:8.4.0-alpine

EXPOSE 8080
ADD . /cbm
WORKDIR /cbm
CMD ["npm","start"]
