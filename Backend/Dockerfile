# Stage 1: Build
FROM node:22.16.0-alpine AS builder
WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

COPY package*.json ./
RUN npm ci

COPY . .

# Stage 2: Production runtime
FROM node:22.16.0-alpine AS prod
WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app ./

# Install wget for healthcheck
RUN apk add --no-cache wget

# Create and fix upload directory ownership
RUN mkdir -p /app/controller/applyforjob/upload \
 && addgroup -S app && adduser -S app -G app \
 && chown -R app:app /app/controller

USER app

EXPOSE 4000

# ✅ Healthcheck hits /health endpoint and requires 200 OK
HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
  CMD wget --spider --quiet http://localhost:4000/health || exit 1

CMD ["node", "server.js"]
