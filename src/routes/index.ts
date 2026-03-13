import { Router, Request, Response } from 'express';
import memberRoutes from './memberRoutes';  
import userRoutes from './userRoutes';  

const apiRouter:Router = Router();  

apiRouter.use('/members', memberRoutes);  
apiRouter.use('/users', userRoutes);  

apiRouter.get('/', (req:Request, res: Response) => {  
res.send('Hello Sasha!')  
})  

export default apiRouter; 