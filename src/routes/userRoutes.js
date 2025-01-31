import express from "express"
import cors from "cors"
import { criarNovoUser, logarUsers } from "../controller/usersController.js"

const corsOptions = {
    origin:"http://localhost:5173",
    optionsSuccessStatus: 200
}

const routes = (app) => {
    app.use(express.json())
    app.use(cors(corsOptions));

    app.get("/login/:email/:password", logarUsers)
    app.get("/register/:email/:password", criarNovoUser)
}

export default routes;