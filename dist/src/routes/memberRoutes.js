"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const memberController_1 = require("../controllers/memberController");
const productRouter = (0, express_1.Router)();
productRouter.get('/members', memberController_1.getAllMembers);
productRouter.get('/members/:id', memberController_1.getMemberById);
productRouter.post('/createmember/', memberController_1.createMember);
productRouter.patch('/updatemember/:id', memberController_1.modifyMember);
productRouter.delete('/deletemember/', memberController_1.deleteMember);
exports.default = productRouter;
//# sourceMappingURL=memberRoutes.js.map