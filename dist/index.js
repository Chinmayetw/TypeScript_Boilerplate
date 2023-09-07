"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(config_1.PORT, () => {
    console.log(`🌐 \x1b[1;46mAPI listening\x1b[0m : \x1b[36mhttp://localhost:${config_1.PORT}\x1b[0m`);
});
app.get("/", (req, res) => {
    const data = {
        row: 'column'
    };
    res.json(data);
});
app.post("/send", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});
