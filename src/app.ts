import express, { json } from "express";
import cors from 'cors'
import router from "./routes";
import { connectDb } from "./database/database";
const app = express()

app.use(json());
app.use(cors());
app.use(router)


const port = process.env.PORT ;
app.listen(port, () => console.log(`Server running in port: ${port}`));
connectDb();
