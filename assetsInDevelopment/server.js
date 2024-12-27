import express, { json } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(json());

let hasReceivedRequest = false;

app.post('/api/submit', (req, res) => {
    if (hasReceivedRequest) {
        return res.status(403).json({ message: 'You cannot submit again.' });
    }

    hasReceivedRequest = true;

    console.log('Received data:', req.body);
    res.json({ message: 'Request successfully received.' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
