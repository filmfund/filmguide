# 1. Base stage with Deno
FROM oven/bun:1.3.0-alpine AS base
WORKDIR /app

#ENV LD_LIBRARY_PATH=/usr/lib:/usr/local/lib

# # install node-gyp dependencies
#RUN apk add --no-cache python3 make g++
# # install npm and nodejs
#RUN apk add --no-cache nodejs npm

# Copy rest of the app
COPY . .

RUN bun install

# Build your Next.js app
RUN bun run build

# 2. Runtime stage
FROM oven/bun:1.3.0-alpine AS runtime
WORKDIR /app

COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/node_modules ./node_modules

EXPOSE 3000
CMD ["bun", "run", "start"]
