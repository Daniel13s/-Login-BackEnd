import 'dotenv/config'
import conectarAoBanco from "../config/dbConfig.js"

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function emailAnalise(email) {
    const db = conexao.db("Cadastro")
    const colecao = db.collection("users")
    const emailUser = await colecao.findOne({email})
    return emailUser
}
export async function senhaAnalise(password) {
    const db = conexao.db("Cadastro")
    const colecao = db.collection("users")
    const senhaUser = await colecao.findOne({password})
    return senhaUser
}

export async function criarUsers(email, password) {
    const db = conexao.db("Cadastro")
    const colecao = db.collection("users")
    return colecao.insertOne({email, password});
}