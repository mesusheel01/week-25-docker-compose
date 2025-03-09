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


## Docker compose installation steps

- 
