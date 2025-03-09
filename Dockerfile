FROM node:22-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

ENV DATABASE_URL=postgresql://postgres:your_password@localhost:5433/postgres

RUN npx prisma migrate dev
RUN npx prisma generate
RUN npx run build

CMD [ "npm", "start" ]
