# ---- Base Node ----
FROM node:18-slim AS base
WORKDIR /app
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
RUN npm install

# ---- Copy Files/Build ----
FROM dependencies AS build
WORKDIR /app
COPY . /app
RUN npm run build

# --- Release with Alpine ----
FROM node:18-alpine AS release
WORKDIR /app
COPY --from=build /app/build ./build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]