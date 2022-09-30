import { ITag } from '@blog/shared-types'
import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    DataTypes,
} from 'sequelize'
import { DatabaseConnection } from '../db/DatabaseConnection'

export class Tag
    extends Model<InferAttributes<Tag>, InferCreationAttributes<Tag>>
    implements ITag
{
    declare id: number
    declare name: string
}

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: DatabaseConnection.sequelize,
        timestamps: false,
    },
)
