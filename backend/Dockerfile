FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm config set registry https://registry.npmjs.org/ \
 && npm config set fetch-retries 5 \
 && npm config set fetch-retry-factor 2 \
 && npm config set fetch-retry-maxtimeout 600000 \
 && npm ci --omit=dev --no-audit --no-fund

COPY . .

ENV NODE_ENV=production
EXPOSE 8080

CMD ["node", "server.js"]
