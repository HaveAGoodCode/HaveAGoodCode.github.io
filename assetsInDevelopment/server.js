import express, { json } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { v4 as uuidv4 } from 'uuid'; // 引入 uuid 库生成唯一 ID

const app = express();
const port = 3000;

app.use(cors());
app.use(json());
app.use(cookieParser()); // 用于解析 Cookie

// 存储已生成 ID 的集合
let clients = new Set();

app.post('/api/submit', (req, res) => {
    const clientId = req.cookies.clientId;  // 从客户端获取 clientId

    // 如果客户端没有提供 clientId，则生成新的 clientId
    if (!clientId) {
        const newClientId = uuidv4();  // 生成一个新的唯一 ID
        res.cookie('clientId', newClientId, { httpOnly: true });  // 将 clientId 存入 Cookie
        clients.add(newClientId);  // 存储到已生成 ID 的集合中
        console.log('Generated new client ID:', newClientId);
        return res.json({ message: 'Generated new client ID. First time access.' });
    }

    // 记录已提交的 clientId
    clients.add(clientId);

    console.log('Received data:', req.body);
    res.json({ message: 'Request successfully received.' });
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
