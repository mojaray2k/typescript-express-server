"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res) {
    res.send(/*javascript */ "\n    <div>\n      <h1>Hi there!</h1>\n    </div>\n  ");
});
app.listen(3020, function () {
    console.log('Listing on port 3020');
});