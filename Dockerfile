FROM node:10.11 AS builder

WORKDIR /home/node
COPY . .
RUN chown -R node:node .

USER node
RUN  yarn install && yarn build

FROM nginx:mainline-alpine

RUN addgroup -S app -g 1000 && adduser -S -h /home/app -s /bin/sh -u 1000 app

COPY --from=builder --chown=app /home/node/build /usr/share/nginx/html

COPY ./default-nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/nginx.conf


RUN touch /var/run/nginx.pid && \
  chown -R app /var/run/nginx.pid && \
  chown -R app /var/cache/nginx

USER app
