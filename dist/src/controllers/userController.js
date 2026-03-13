"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.modifyUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const user_1 = require("../models/user");
const member_1 = require("../models/member");
//Create new user 
const createUser = (req, res) => {
    //Validate request 
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    // Save User in the database 
    const user = Object.assign({}, req.body);
    user_1.User.create(user)
        .then((data) => {
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
exports.createUser = createUser;
// Get all users using Promises
const getAllUsers = (req, res) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query. 
    user_1.User.findAll({
        attributes: { exclude: ["member_id"] },
        include: [{ model: member_1.Member, attributes: ["id", "name"] }]
    })
        .then((data) => {
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
exports.getAllUsers = getAllUsers;
/// Get users by Id 
const getUserById = (req, res) => {
    user_1.User.findByPk(Number(req.params.id))
        .then((data) => {
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
exports.getUserById = getUserById;
///Modify user 
const modifyUser = (req, res) => {
    // Validate request 
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty.",
            payload: null,
        });
    }
    // Save User in the database 
    user_1.User.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "success",
                message: "User successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
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
exports.modifyUser = modifyUser;
///Delete user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield user_1.User.destroy({ where: { id } });
        res.status(200).json({ message: "User deleted" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting users",
            error,
        });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map