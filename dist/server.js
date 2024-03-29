"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 5137;
const HOST = '192.168.43.220';
app.get('/', (req, res) => {
    res.send('Hello)');
});
app.listen(PORT, () => {
    console.log(`Server has beed running on http://${HOST}:${PORT}`);
});
