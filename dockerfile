# ---- Base Node ----
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
RUN npm install --legacy-peer-deps

# ---- Copy Files/Build ----
FROM dependencies AS build
COPY . .
RUN npm run build

# ---- Release ----
FROM node:18-alpine AS release
WORKDIR /app

# Install only production dependencies
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]