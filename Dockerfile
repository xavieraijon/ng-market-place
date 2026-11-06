# --- Etapa 1: compilar Angular (Angular 13 necesita Node 16) ---
FROM node:16-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx ng build --configuration production

# --- Etapa 2: servir los ficheros estáticos con nginx ---
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ng-shopping-cart /usr/share/nginx/html
EXPOSE 80
