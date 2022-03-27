# Blog API

A simple backend API for the blog.

## Commands

### Build API

```
yarn build
```

### Start API (from build)

Listens on port 3001.

```
yarn start
```

### Start the API (development)

```
yarn dev
```

### Migrations

Since `sequelize-cli` does not support Typescript migrations, `yarn build` must be ran first after creating a new migration, to compile to a JS file `/dist/migrations/`. Then you can run the migration like:

```
yarn sequelize-cli db:migrate
```
