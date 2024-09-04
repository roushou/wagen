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
RUN bun install --frozen-lockfile --production

COPY --link . .

FROM base

COPY --from=build /app /app

EXPOSE 8080

CMD [ "bun", "run", "start" ]
