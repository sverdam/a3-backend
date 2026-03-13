"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const memberController_1 = require("../controllers/memberController");
const memberRouter = (0, express_1.Router)();
memberRouter.get('/', memberController_1.getAllMembers);
memberRouter.get('/:id', memberController_1.getMemberById);
memberRouter.post('/create', memberController_1.createMember);
memberRouter.patch('/update/:id', memberController_1.modifyMember);
memberRouter.delete('/delete', memberController_1.deleteMember);
exports.default = memberRouter;
//# sourceMappingURL=memberRoutes.js.map