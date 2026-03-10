"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const memberRouter = (0, express_1.Router)();
memberRouter.get('/members', (req, res) => {
    res.send('Get a list of CLAS members');
});
memberRouter.get('/members/:id', (req, res) => {
    res.send(`Get the member with ID ${req.params.id}`);
});
memberRouter.post('/', (req, res) => {
    res.send(`Create a new member with ID: ${req.params.id}`);
});
memberRouter.patch('/:id', (req, res) => {
    res.send(`Update the member with ID ${req.params.id}\n Name: ${req.body.name}`);
});
memberRouter.delete('/', (req, res) => {
    res.send(`Deleting the member with ID ${req.params.id}`);
});
exports.default = memberRouter;
//# sourceMappingURL=memberRoutes.js.map