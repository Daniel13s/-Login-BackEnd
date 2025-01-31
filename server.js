import express from "express"
import routes from "./src/routes/userRoutes.js"

const app = express()
routes(app)

const port = 3000

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})