FROM node:14-alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/configfile.template
COPY --from=builder /app/build /usr/share/nginx/html

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"