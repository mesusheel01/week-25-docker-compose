FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install

COPY . .

ENV DATABASE_URL=postgresql://postgres:passmebeta@postgres:5433/postgres

RUN npx prisma generate
RUN pnpm run build


EXPOSE 3000

CMD [ "pnpm", "dev" ]
