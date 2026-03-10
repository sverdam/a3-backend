
import { Router, Request, Response } from 'express';  
const memberRouter:Router = Router();  

memberRouter.get('/members', (req:Request, res:Response) => {  
res.send('Get a list of CLAS members')  
});  

memberRouter.get('/members/:id', (req:Request, res:Response) => {  
res.send(`Get the member with ID ${req.params.id}`)  
});  

memberRouter.post('/', (req:Request, res:Response) => {  
res.send(`Create a new member with ID: ${req.params.id}`)  
});  

memberRouter.patch('/:id', (req:Request, res:Response) => {  
res.send(`Update the member with ID ${req.params.id}\n Name: ${req.body.name}`)  
});  

memberRouter.delete('/', (req:Request, res:Response) => {  
res.send(`Deleting the member with ID ${req.params.id}`)  
});  

export default memberRouter; 

