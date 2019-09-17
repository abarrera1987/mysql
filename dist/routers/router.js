"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/heroes', (req, res) => {
    const query = ` SELECT * FROM heroes `;
    mysql_1.default.ejecutarQuery(query, (err, heroes) => {
        res.json({
            ok: true,
            messagge: "Todo esta bien",
            heroes
        });
    });
});
router.get('/heroes/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        ok: true,
        messagge: "Todo esta bien",
        id
    });
});
exports.default = router;
