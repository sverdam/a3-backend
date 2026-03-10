import { Router } from 'express';
import {
createMember,  
deleteMember,  
getAllMembers,  
getMemberById,  
modifyMember 
} from '../controllers/memberController'; 

const productRouter:Router = Router();  

productRouter.get('/members', getAllMembers);  

productRouter.get('/members/:id', getMemberById);  

productRouter.post('/createmember/', createMember);  

productRouter.patch('/updatemember/:id', modifyMember);  

productRouter.delete('/deletemember/', deleteMember);  

export default productRouter; 


