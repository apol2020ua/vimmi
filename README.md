
<div style="display: flex; justify-content: space-evenly">
<p align="center">
  <a href="https://vimmi.net/" target="blank"><img src="https://vimmi.net/wp-content/uploads/2022/11/logo_bot.svg" width="200" alt="Nest Logo" /></a>
</p>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
</div>

## Vimmi Assignment. Main points:

1. REST api built on NestJS
2. Based on requirements, added airbnb eslint rule for TypeScript
3. Environment config variables located in the `.env` file, that should be created in the root of the project
4. For environment file example pls look at `.env.example`
5. On project start, environment variables checks in `src/utils/env.validation.ts` based on `src/environment.ts` schema
6. Exists simple tests for `users.service.ts`
## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```