- Due to port conflicting the prisma client wasn't able to connect to the postgres image inside the docker container. So check once before starting.

## Manual Installation
- Install node.js locally ()
- Clone the repo
- Install dependencies (npm install)
- Start the DB locally
    - docker run -e POSTGRES_PASSOWRD=YOUR-PASSWORD -d -p 5432:5432 postgres
    - or use your own database
- Change the .env file and update your Db credentials
- npx prisma migrate
- npx prisma generate
- npm run build
- npm run start

## Docker installation
- Install docker
- Start a network so that node project and database can interact over a common netwokr : `docker network create node-pg`
- Start postgres
    - docker run --network node-pg --name postgres -e POSTGRES_PASSOWRD=YOUR-PASSWORD -d -p 5432:5432 postgres
- Build the image - `docker build -t user-project .`
- Start the image - `docker run --network node-pg -p 3000:3000 user-project`

## Docker compose installation steps
- Install docker, docker-compose
- Run `docker compose up`
