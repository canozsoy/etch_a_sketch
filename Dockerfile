FROM node:16.15.0-alpine3.15@sha256:bb776153f81d6e931211e3cadd7eef92c811e7086993b685d1f40242d486b9bb as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV IS_NGINX "true"
RUN npm run build

FROM nginx:1.22.0-alpine@sha256:e012f7b78c91f50a8a98bec1b707e454f783c5cbc5a8caeaadce60b3d143b70f as production
WORKDIR /app
COPY --from=build /app/dist .
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 9080
CMD ["nginx", "-g", "daemon off;"]
