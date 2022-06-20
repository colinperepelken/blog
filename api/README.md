# Blog API

A simple backend API for the blog.

## Commands

### `nvm use`

Before running any of the below commands, ensure you are using the correct node version by running

```
nvm use
```

### Install dependencies

```
npm install
```

### Build API

```
npm run build
```

### Start API (from build)

Listens on port 3001.

```
npm start
```

### Start the API (development)

```
npm run dev
```

### Database commands

To create the database, run:

```
npm run db:create
```

To create a new migration and run it:

```
npm run db:migration:create [migration-name]
npm run build
npm run db:migrate
```

Since `sequelize-cli` does not support Typescript migrations, JavaScript files must be created using `npm build` before performing the migration.

To create a new seeder, use:

```
npm run db:seeder:create [seeder-name]
```

To seed the database, run:

```
npm run db:seed
```

Run the command below to drop the database. Warning! You will lose all data.

```
npm run db:drop
```

To run `db:create`, `db:migrate`, and `db:seed` all in one, you can use:

```
npm run build
npm run db:init
```
