FROM node:lts-alpine

# Server installation
COPY server/ /usr/src/aicha.photos/server
WORKDIR /usr/src/aicha.photos/server
RUN npm install

COPY client/public /usr/src/aicha.photos/client/public
COPY client/tools /usr/src/aicha.photos/client/tools
COPY client/views /usr/src/aicha.photos/client/views

EXPOSE 7800
CMD [ "node", "index.js" ]
