# Ant Server

## Environment setup
0. setup your local postgres database
1. clone this repo.
2. run `yarn` in the project root.
3. add a `.env` file, and include the following
```
DB_NAME=toguDb
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=TOUGU_ADMIN
JWT_SECRET=hello_tougu
```

## Start developing work
1. run `yarn start` or `yarn start:dev`
2. go to http://localhost:3000/graphql to test queries

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```