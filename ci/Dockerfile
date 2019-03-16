FROM node:8 AS build-container

WORKDIR frontend-application
COPY . .
RUN npm install
RUN npm run swagger
RUN npm run build


FROM nginx
COPY ci/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-container /frontend-application/dist/signin-admin-site /usr/share/nginx/html
