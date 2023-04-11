# set node version
FROM node:lts-bullseye as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
ENV REACT_APP_API_URL="https://toolbox-server-test.onrender.com"
RUN yarn build

FROM nginx:alphine
ADD ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/dist /var/www/app/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]