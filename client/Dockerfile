FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build -- --prod

FROM httpd:2.4

COPY --from=build /app/dist /usr/local/apache2/htdocs/

EXPOSE 80

CMD ["httpd-foreground"]
