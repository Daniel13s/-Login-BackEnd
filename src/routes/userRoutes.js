import express from "express"
import cors from "cors"
import { criarNovoUser, logarUsers } from "../controller/usersController.js"

const corsOptions = {
    origin:"https://login-front-end-eight.vercel.app",
    optionsSuccessStatus: 200
}

const routes = (app) => {
    app.use(express.json())
    app.use(cors(corsOptions));

    app.get("/login/:email/:password", logarUsers)
    app.get("/register/:email/:password", criarNovoUser)
}

export default routes;
