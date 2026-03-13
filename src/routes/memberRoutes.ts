import { Router } from 'express';
import {
createMember,  
deleteMember,  
getAllMembers,  
getMemberById,  
modifyMember 
} from '../controllers/memberController'; 

const memberRouter:Router = Router();  

memberRouter.get('/', getAllMembers);  

memberRouter.get('/:id', getMemberById);  

memberRouter.post('/create', createMember);  

memberRouter.patch('/update/:id', modifyMember);  

memberRouter.delete('/delete', deleteMember);  

export default memberRouter; 


