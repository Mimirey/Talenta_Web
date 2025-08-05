FROM node:24 As builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

RUN npm prune --production

FROM node:24-slim As runner

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules node_modules/
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.env ./

ENV NODE_ENV=production

EXPOSE 3000
