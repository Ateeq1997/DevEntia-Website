# Backend/Dockerfile
FROM node:22.16.0-alpine AS base
WORKDIR /app
COPY package*.json ./

# Development dependencies (includes dev dependencies)
FROM base AS dev-deps
RUN npm ci

# Production dependencies (excludes dev dependencies)
FROM base AS prod-deps
RUN npm ci --omit=dev

# Production runtime
FROM node:22.16.0-alpine AS prod
WORKDIR /app
ENV NODE_ENV=production
RUN apk add --no-cache wget
COPY --from=prod-deps /app/node_modules ./node_modules
COPY . .
RUN mkdir -p /app/controller/applyforjob/upload \
 && addgroup -S app && adduser -S app -G app \
 && chown -R app:app /app/controller
USER app
EXPOSE 4000
HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
  CMD wget --spider --quiet http://localhost:4000/health || exit 1
CMD ["node", "server.js"]

# Development runtime
FROM node:22.16.0-alpine AS dev
WORKDIR /app
ENV NODE_ENV=development
RUN apk add --no-cache wget
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN mkdir -p /app/controller/applyforjob/upload
EXPOSE 4000
HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
  CMD wget --spider --quiet http://localhost:4000/health || exit 1
CMD ["npm", "run", "dev"]

# Frontend/Dockerfile
FROM node:22.16.0-alpine AS base
WORKDIR /app
COPY package*.json ./

# Development dependencies (includes dev dependencies)
FROM base AS dev-deps
RUN npm ci

# Production dependencies (excludes dev dependencies)
FROM base AS prod-deps
RUN npm ci --omit=dev

# Production runtime
FROM node:22.16.0-alpine AS prod
WORKDIR /app
ENV NODE_ENV=production
RUN apk add --no-cache wget
COPY --from=prod-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1
CMD ["npm", "start"]

# Development runtime
FROM node:22.16.0-alpine AS dev
WORKDIR /app
ENV NODE_ENV=development
RUN apk add --no-cache wget
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1
CMD ["npm", "run", "dev"]