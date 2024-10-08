FROM node:16-alpine as build 


WORKDIR /react-app


COPY package.json .


RUN npm install


COPY . .


RUN npm  run build


FROM nginx:1.19


COPY ./deployment/nginx.conf /etc/nginx/nginx.conf


COPY --from=build /react-app/build /usr/share/nginx/html
