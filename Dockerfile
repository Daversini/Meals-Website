# Stage 1: Build dell'app Angular
FROM node:lts-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build --prod

# Stage 2: Serve l'app Angular con NGINX
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/meals-website/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
