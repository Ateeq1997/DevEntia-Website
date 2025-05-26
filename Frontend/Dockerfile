# Frontend/Dockerfile

# Stage 1: Base builder
ARG NODE_ENV=production
FROM node:22.16.0-alpine AS base
WORKDIR /app
ENV NODE_ENV=$NODE_ENV

COPY package*.json ./
RUN npm ci

COPY . .

# Stage 2: Build app
FROM base AS builder
RUN npm run build

# Stage 3: Production runtime
FROM node:22.16.0-alpine AS prod
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1

CMD ["npm", "start"]

# Optional dev target
FROM base AS dev
CMD ["npm", "start"]
