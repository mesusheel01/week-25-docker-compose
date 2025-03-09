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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const pc = new client_1.PrismaClient();
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield pc.user.findMany();
        res.json({ data }); // ✅ Only send one response
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
app.post('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield pc.user.create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString()
            }
        });
        console.log('hi');
        res.send("User created successfully: " + JSON.stringify(response));
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'User creation failed' });
    }
}));
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
