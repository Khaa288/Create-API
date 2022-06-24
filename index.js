import express, { response } from 'express';
import bodyParser from 'body-parser';
import usersRouters from './routes/user.js';

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use('/users', usersRouters);

app.get('/', (request, response) => { response.send('<h1>HOME PAGE</h1>'); });

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));