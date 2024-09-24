import {
  Table,
  Column,
  Model,
  PrimaryKey,
  IsUUID,
  Default,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";

@Table({
  timestamps: true,
})
export class Users extends Model {
  @PrimaryKey
  @IsUUID(4)
  @Default(DataTypes.UUIDV4)
  @Column
  id!: string;

  @Column
  name!: string;

  @Column
  email!: string;

  @Column
  password!: string;
}
