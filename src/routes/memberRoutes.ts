import { Router } from 'express';
import {
createMember,  
deleteMember,  
getAllMembers,  
getMemberById,  
modifyMember 
} from '../controllers/memberController'; 

const productRouter:Router = Router();  

productRouter.get('/', getAllMembers);  

productRouter.get('/:id', getMemberById);  

productRouter.post('/create', createMember);  

productRouter.patch('/update/:id', modifyMember);  

productRouter.delete('/delete', deleteMember);  

export default productRouter; 


