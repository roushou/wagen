# syntax = docker/dockerfile:1

FROM oven/bun:1 AS base

LABEL fly_launch_runtime="NodeJS"

WORKDIR /app

ENV NODE_ENV=production

# Throw-away build stage to reduce size of final image
FROM base as build

RUN apt-get update -qq && \
    apt-get install -y python-is-python3 pkg-config build-essential 

COPY --link package.json .
# TODO: Install only production dependencies
RUN bun install --frozen-lockfile

COPY --link . .

FROM base

COPY --from=build /app /app

EXPOSE 8080

# TODO: Use build instead of dev server
CMD ["bun", "dev", "--host", "0.0.0.0", "--port", "8080"]
