import express, { Request, Response, Express } from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
    res.send({"Products": ['hi', 'me'], "distance": 0})
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})