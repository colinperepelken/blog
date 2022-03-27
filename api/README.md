# Blog API

A simple backend API for the blog.

## Commands

### Install dependencies

```
yarn install
```

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

### Database commands

To create the database, run:

```
yarn db:create
```

To create a new migration and run it:

```
yarn db:migration:create [migration-name]
yarn build
yarn migrate
```

Since `sequelize-cli` does not support Typescript migrations, JavaScript files must be created using `yarn build` before performing the migration.

To seed the database, run:

```
yarn db:seed
```

Run the command below to drop the database. Warning! You will lose all data.

```
yarn db:drop
```
