FROM node:12-alpine as build
WORKDIR /app

COPY ./package.json ./yarn.* ./
RUN yarn
COPY . .
RUN yarn build
RUN apk add zip
RUN zip -r dist.zip ./dist

FROM node:12-alpine
ENV MONGO_URL=mongodb://psousa:7Pu8HX1bvdyg2qKW@cluster0-shard-00-00.bvxfx.mongodb.net:27017,cluster0-shard-00-01.bvxfx.mongodb.net:27017,cluster0-shard-00-02.bvxfx.mongodb.net:27017/digix?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority
COPY --from=build ./app/package.json .
COPY --from=build ./app/yarn.lock .
COPY --from=build ./app/dist.zip ./
RUN apk add unzip && unzip dist.zip && apk del unzip
RUN yarn --prod && yarn cache clean

EXPOSE 3333

CMD npm start