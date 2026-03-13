
import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, ForeignKey, AllowNull, BelongsTo} from 'sequelize-typescript'; 
import {Optional} from 'sequelize'; 
import { Member } from "../models/member"; 


interface UserAttributes{ 
  id: number; 
  name: string; 
  email: string; 
  member_id: number ; 
} 

interface UserCreationAttributes extends Optional<UserAttributes, 'id'>{} 

@Table ({ 
  tableName: "Users" 
}) 
export class User extends Model<UserAttributes, UserCreationAttributes>{ 


// Here, TS infers Data Type from the JS Type 
  // The ! means that the variable title wont be null or undefine.  
   @Column 
   name!: string; 

  // Here, we set the Data Type explicity 
  // The ? means the variable can be null or undefined 
   @Column 
   email!: string; 

   @ForeignKey (() => Member)
   @Column ({
    type: DataType.INTEGER,
    allowNull: true,
   })
   declare member_id: number | null;
   
   @BelongsTo(()=> Member, {foreignKey: "member_id"})
   declare member?: Member | null;

   @CreatedAt 
   @Column 
   createdAt!: Date; 

   @UpdatedAt 
   @Column 
   updatedAt!: Date; 
} 