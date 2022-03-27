import { IArticleDetails } from "@blog/shared-types";
import { AutoIncrement, Column, CreatedAt, DataType, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";

@Table({ timestamps: true })
export class Article extends Model<Article> implements IArticleDetails{

    @AutoIncrement
    @PrimaryKey
    @Column
    public id!: number;

    @Column(DataType.TEXT)
    public title!: string;

    @Column(DataType.TEXT)
    public imageUrl!: string;

    @Column(DataType.TEXT)
    public content!: string;

    @Column(DataType.TEXT)
    public author!: string;

    @CreatedAt
    public createdAt!: number

    @UpdatedAt
    public updatedAt!: number
    
}