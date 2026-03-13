"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const memberRoutes_1 = __importDefault(require("./memberRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const apiRouter = (0, express_1.Router)();
apiRouter.use('/members', memberRoutes_1.default);
apiRouter.use('/users', userRoutes_1.default);
apiRouter.get('/', (req, res) => {
    res.send('Hello Sasha!');
});
exports.default = apiRouter;
//# sourceMappingURL=index.js.map