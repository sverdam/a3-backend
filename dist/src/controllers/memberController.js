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
exports.deleteMember = exports.modifyMember = exports.getMemberById = exports.getAllMembers = exports.createMember = void 0;
const member_1 = require("../models/member");
//Create new member 
const createMember = (req, res) => {
    //Validate request 
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    // Save Member in the database 
    const member = Object.assign({}, req.body);
    member_1.Member.create(member)
        .then((data) => {
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
exports.createMember = createMember;
// Get all members using Promises
const getAllMembers = (req, res) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query. 
    member_1.Member.findAll()
        .then((data) => {
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
exports.getAllMembers = getAllMembers;
/// Get members by Id 
const getMemberById = (req, res) => {
    member_1.Member.findByPk(Number(req.params.id))
        .then((data) => {
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
exports.getMemberById = getMemberById;
///Modify member 
const modifyMember = (req, res) => {
    // Validate request 
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty.",
            payload: null,
        });
    }
    // Save Member in the database 
    member_1.Member.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "success",
                message: "Member successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
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
exports.modifyMember = modifyMember;
///Delete member
const deleteMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield member_1.Member.destroy({ where: { id } });
        res.status(200).json({ message: "Member deleted" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting members",
            error,
        });
    }
});
exports.deleteMember = deleteMember;
//# sourceMappingURL=memberController.js.map