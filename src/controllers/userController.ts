import { RequestHandler, Request, Response } from "express";
import { User } from "../models/user"; 
import { Member } from "../models/member"; 

//Create new user 
export const createUser: RequestHandler = (req: Request, res: Response) => { 
  //Validate request 
  if (!req.body) { 
    return res.status(400).json({ 
      status: "error", 
      message: "Content can not be empty", 
      payload: null, 
    }); 
  } 
   
// Save User in the database 
  const user = { ...req.body }; 
  User.create(user) 
    .then((data: User | null) => { 
      res.status(200).json({ 
        status: "success", 
        message: "User successfully created", 
        payload: data, 
      }); 
    }) 
    .catch((err) => { 
       res.status(500).json({ 
         status: "error", 
         message: "Something happened creating a user. " + err.message, 
         payload: null, 
       }); 
    }); 
}; 

// Get all users using Promises
export const getAllUsers: RequestHandler = (req: Request, res: Response) => { 
  //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query. 
   
   User.findAll({
       attributes: {exclude: ["member_id"]},
       include: [{model: Member, attributes: ["id", "name"]}]
      }) 
      
   .then((data: User[]) => { 
      return res.status(200).json({ 
         status: "success", 
           message: "Users successfully retrieved", 
           payload: data, 
      }); 
    }) 
    .catch((err) => { 
       return res.status(500).json({ 
       status: "error", 
       message: "Something happened retrieving all users. " + err.message, 
       payload: null, 
    }); 
  }); 
}; 

/// Get users by Id 
export const getUserById: RequestHandler = (req: Request, res: Response) => { 
  User.findByPk(Number(req.params.id)) 
  .then((data: User | null) => { 
    return res.status(200).json({ 
      status: "success", 
      message: "Users successfully retrieved", 
      payload: data, 
    }); 
  }) 
  .catch((err) => { 
    return res.status(500).json({ 
      status: "error", 
      message: "Something happened retrieving all users. " + err.message, 
      payload: null, 
    }); 
  }); 
}; 

///Modify user 
export const modifyUser:RequestHandler = (req: Request, res: Response) => { 
  // Validate request 
  if (!req.body) { 
    return res.status(400).json({ 
      status: "error", 
      message: "Content can not be empty.", 
      payload: null, 
    }); 
  } 

// Save User in the database 
  User.update({ ...req.body }, { where: { id: req.params.id } }) 
  .then((isUpdated) => { 
    if (isUpdated) { 
      return res.status(200).json({ 
        status: "success", 
        message: "User successfully updated", 
        payload: { ...req.body }, 
      }); 
    } else { 
      return res.status(500).json({ 
        status: "error", 
        message: "Something happened updating the user. ", 
        payload: null, 
    }); 
   } 
  }) 
  .catch((err) => { 
    res.status(500).json({ 
      status: "error", 
      message: "Something happened updating a user. " + err.message, 
      payload: null, 
  }); 
}); 
}; 

///Delete user
export const deleteUser: RequestHandler = async (req: Request, res: Response): Promise<void> => { 
    const { id } = req.body; 
    try { 
      await User.destroy({ where: { id } }); 
      res.status(200).json({ message: "User deleted" }); 
    } catch (error) { 
      res.status(500).json({ 
        message: "Error deleting users", 
        error, 
      }); 
    } 
}; 