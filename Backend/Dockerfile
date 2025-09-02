# Backend/Dockerfile

# Stage 1: Base
FROM node:22.16.0-alpine AS base
WORKDIR /app

COPY package*.json ./

# Stage 2: Development dependencies
FROM base AS dev-deps
RUN npm ci --omit=dev

# Stage 3: Production dependencies
FROM base AS prod-deps
RUN npm ci --omit=dev

# Stage 4: Build stage
FROM dev-deps AS builder
COPY . .
# Add any build steps here if needed

# Stage 5: Production runtime
FROM node:22.16.0-alpine AS prod
WORKDIR /app

ENV NODE_ENV=production

# Install wget for healthcheck
RUN apk add --no-cache wget

# Copy production dependencies
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app ./

# Create and fix upload directory ownership
RUN mkdir -p /app/controller/applyforjob/upload \
 && addgroup -S app && adduser -S app -G app \
 && chown -R app:app /app/controller

USER app

EXPOSE 4000

HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
  CMD wget --spider --quiet http://localhost:4000/health || exit 1

CMD ["node", "server.js"]

# Stage 6: Development runtime
FROM node:22.16.0-alpine AS dev
WORKDIR /app

ENV NODE_ENV=development

# Install wget for healthcheck
RUN apk add --no-cache wget

# Copy dev dependencies and source code
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .

# Create upload directory
RUN mkdir -p /app/controller/applyforjob/upload

EXPOSE 4000

HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
  CMD wget --spider --quiet http://localhost:4000/health || exit 1

# Use nodemon for development (install it in your package.json dev dependencies)
CMD ["npm", "run", "dev"]