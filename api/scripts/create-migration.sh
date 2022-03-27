#!/bin/bash

MIGRATION_NAME=${1:-new-migration}
TIMESTAMP=$(date '+%Y%m%d%H%M%S')

echo "
import { Sequelize, QueryInterface } from 'sequelize';

export const up = async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    throw Error('Up migration not implemented')
}

export const down = async () => {
    throw Error('Down migration not implemented')
}
" >> "src/migrations/${TIMESTAMP}-${MIGRATION_NAME}.ts"