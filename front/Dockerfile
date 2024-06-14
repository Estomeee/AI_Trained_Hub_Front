FROM node:lts-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist .