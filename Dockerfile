FROM node:20-alpine AS base

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nextjs

RUN apk add --no-cache libc6-compat python3 make g++

ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_JA==
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS builder

COPY package.json pnpm-lock.yaml ./

RUN corepack enable pnpm && \
  pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM base AS runner

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]