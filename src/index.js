"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PING_LISTEN_PORT = 8080;
app.get("/ping", (req, res) => {
    res.send(req.headers);
});
app.get("*/*", (req, res) => {
    res.status(404).send();
});
app.listen(PING_LISTEN_PORT, () => {
    console.log("The application is listening on port " + PING_LISTEN_PORT + "!");
});
