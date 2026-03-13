import { Router, Request, Response } from 'express';
import memberRoutes from './memberRoutes';  

const apiRouter:Router = Router();  

apiRouter.use('/members', memberRoutes);  

apiRouter.get('/', (req:Request, res: Response) => {  
res.send('Hello World!')  
})  

export default apiRouter; 