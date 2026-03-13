import { Router } from 'express';
import {
createUser,  
deleteUser,  
getAllUsers,  
getUserById, 
modifyUser 
} from '../controllers/userController'; 

const userRouter:Router = Router();  

userRouter.get('/', getAllUsers);  

userRouter.get('/:id', getUserById);  

userRouter.post('/create', createUser);  

userRouter.patch('/update/:id', modifyUser);  

userRouter.delete('/delete', deleteUser);  

export default userRouter; 


