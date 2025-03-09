FROM node:22-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install

COPY . .

ENV DATABASE_URL=postgresql://postgres:passmeboss@localhost:5433/postgres

RUN npx prisma generate
RUN npx run build

EXPOSE 3000

CMD [ "pnpm", "dev" ]
