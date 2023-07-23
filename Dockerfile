FROM node:18-alpine AS build
WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

FROM node:18-alpine
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
EXPOSE 8080
CMD ["node", "dist/main.js"]