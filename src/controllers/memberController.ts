import { RequestHandler, Request, Response } from "express";
import { Member } from "../models/member"; 

//Create new member 
export const createMember: RequestHandler = (req: Request, res: Response) => { 
  //Validate request 
  if (!req.body) { 
    return res.status(400).json({ 
      status: "error", 
      message: "Content can not be empty", 
      payload: null, 
    }); 
  } 
   
// Save Member in the database 
  const member = { ...req.body }; 
  Member.create(member) 
    .then((data: Member | null) => { 
      res.status(200).json({ 
        status: "success", 
        message: "Member successfully created", 
        payload: data, 
      }); 
    }) 
    .catch((err) => { 
       res.status(500).json({ 
         status: "error", 
         message: "Something happened creating a member. " + err.message, 
         payload: null, 
       }); 
    }); 
}; 

// Get all members using Promises
export const getAllMembers: RequestHandler = (req: Request, res: Response) => { 
  //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query. 
   
   Member.findAll() 
   .then((data: Member[]) => { 
      return res.status(200).json({ 
         status: "success", 
           message: "Members successfully retrieved", 
           payload: data, 
      }); 
    }) 
    .catch((err) => { 
       return res.status(500).json({ 
       status: "error", 
       message: "Something happened retrieving all members. " + err.message, 
       payload: null, 
    }); 
  }); 
}; 

/// Get members by Id 
export const getMemberById: RequestHandler = (req: Request, res: Response) => { 
  Member.findByPk(Number(req.params.id)) 
  .then((data: Member | null) => { 
    return res.status(200).json({ 
      status: "success", 
      message: "Members successfully retrieved", 
      payload: data, 
    }); 
  }) 
  .catch((err) => { 
    return res.status(500).json({ 
      status: "error", 
      message: "Something happened retrieving all members. " + err.message, 
      payload: null, 
    }); 
  }); 
}; 

///Modify member 
export const modifyMember:RequestHandler = (req: Request, res: Response) => { 
  // Validate request 
  if (!req.body) { 
    return res.status(400).json({ 
      status: "error", 
      message: "Content can not be empty.", 
      payload: null, 
    }); 
  } 

// Save Member in the database 
  Member.update({ ...req.body }, { where: { id: req.params.id } }) 
  .then((isUpdated) => { 
    if (isUpdated) { 
      return res.status(200).json({ 
        status: "success", 
        message: "Member successfully updated", 
        payload: { ...req.body }, 
      }); 
    } else { 
      return res.status(500).json({ 
        status: "error", 
        message: "Something happened updating the member. ", 
        payload: null, 
    }); 
   } 
  }) 
  .catch((err) => { 
    res.status(500).json({ 
      status: "error", 
      message: "Something happened updating a member. " + err.message, 
      payload: null, 
  }); 
}); 
}; 

///Delete member
export const deleteMember: RequestHandler = async (req: Request, res: Response): Promise<void> => { 
    const { id } = req.body; 
    try { 
      await Member.destroy({ where: { id } }); 
      res.status(200).json({ message: "Member deleted" }); 
    } catch (error) { 
      res.status(500).json({ 
        message: "Error deleting members", 
        error, 
      }); 
    } 
}; 