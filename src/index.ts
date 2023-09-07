import express, {Request, Response} from 'express'
import { PORT } from './config'

const app = express()

app.use(express.json())

app.listen(PORT,()=>{
    console.log(`🌐 \x1b[1;46mAPI listening\x1b[0m : \x1b[36mhttp://localhost:${PORT}\x1b[0m`);
})

app.get("/", (req: Request, res: Response) => {
    const data = {
        row: 'column'
    }
    res.json(data)
})

app.post("/send", (req: Request, res: Response) => {
    console.log(req.body)

    res.sendStatus(200)
})