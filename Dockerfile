# 1. Base stage with Deno
FROM denoland/deno:alpine-2.5.4 AS base
WORKDIR /app

# Copy dependency files first (to leverage Docker cache)
COPY deno.json* .
COPY import_map.json* .

# Cache dependencies (fetch everything up front)
RUN deno cache deno.json || true

# Copy rest of the app
COPY . .

# Build your Next.js app
RUN deno task build

# 2. Runtime stage
FROM denoland/deno:alpine-2.5.4 AS runtime
WORKDIR /app

COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/deno.json ./deno.json
COPY --from=base /app/package.json ./package.json

EXPOSE 80
CMD ["deno", "task", "start"]
