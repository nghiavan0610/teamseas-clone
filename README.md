# teamseas-clone

A basic project using NestJS, Prisma, GraphQL, React-ts, Chakra-ui

## Install NestJS

```
npm i -g @nestjs/cli
```

## Clone the project

```
git clone https://github.com/nghiavan0610/teamseas-clone.git
```

## Run Server

Create an .env file that looks like .env.example file

Start database

```
cd teamseas-clone/api
docker-compose up -d
```

Then start server

```
yarn start:dev
```

## Run Client

```
cd teamseas-clone/ui
yarn dev
```
