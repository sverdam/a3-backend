
import {Table, Model, Column, CreatedAt, UpdatedAt, DataType} from 'sequelize-typescript'; 
import {Optional} from 'sequelize'; 

interface MemberAttributes{ 
  id: number; 
  name: string; 
  description: string; 
  contact: string ; 
  address: string ; 
  type: string ;
} 

interface MemberCreationAttributes extends Optional<MemberAttributes, 'id'>{} 

@Table ({ 
  tableName: "Members" 
}) 
export class Member extends Model<MemberAttributes, MemberCreationAttributes>{ 


// Here, TS infers Data Type from the JS Type 
  // The ! means that the variable title wont be null or undefine.  
   @Column 
   name!: string; 

  // Here, we set the Data Type explicity 
  // The ? means the variable can be null or undefined 
   @Column({ 
      type: DataType.STRING 
   }) 
   description?: string; 

   @Column 
   contact!: string; 

   @Column 
   address!: string; 

   @Column 
   type!: string; 

   @CreatedAt 
   @Column 
   createdAt!: Date; 

   @UpdatedAt 
   @Column 
   updatedAt!: Date; 
} 