import { QueryInterface, Sequelize } from 'sequelize'

export const up = async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
  return queryInterface.bulkInsert('article', [{
    title: 'Example article',
    author: 'William Murdoch',
    content: 'Article content here...',
    imageUrl: '#'
  }])
}

export const down = async () => {
  throw Error('Down seeder not implemented')
}
