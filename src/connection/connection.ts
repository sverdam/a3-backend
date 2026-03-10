
import { Sequelize } from "sequelize-typescript"; 
import { Member } from "../models/member"; 

const connection = new Sequelize({ 
database: 'a3_db', 
dialect: 'postgres', 
username: 'a3_user', 
password: 'HDK#$%Ljkwerff.89', 
storage: ':memory:', 
models: [ 
Member 
] 
}); 

async function connectionDB(){ 
try{ 
await connection.sync(); 
}catch(e){ 
console.log(e); 
} 
} 
export default connectionDB; 
