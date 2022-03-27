#!/bin/bash

MIGRATION_NAME=${1:-new-seeder}
TIMESTAMP=$(date '+%Y%m%d%H%M%S')

echo "
import { Sequelize, QueryInterface } from 'sequelize';

export const up = async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    throw Error('Up seeder not implemented')
}

export const down = async () => {
    throw Error('Down seeder not implemented')
}
" >> "src/seeders/${TIMESTAMP}-${MIGRATION_NAME}.ts"