import { criarUsers, emailAnalise, senhaAnalise } from "../models/usersModel.js";

export async function logarUsers(req, res) {
    const {email, password} = req.params;
    try {
      const validacaoEmail = await emailAnalise(email);
      const validacaoSenha = await senhaAnalise(password);
      if (!validacaoEmail || !validacaoSenha) {
        return res.status(401).json({"message":"Email ou senha incorreto!"})  
      } else {
        return res.status(200).json({"message":"Deu certo poha"})
      }
    } catch(erro) {
      console.error(erro.message);
      res.status(500).json({"Erro:":"falha na requisição"});
    }
}

export async function criarNovoUser(req, res) {
    // Obtém os dados do novo post do corpo da requisição
    const {email, password} = req.params;
    try {
      // Chama a função do modelo para criar o novo post no banco de dados
      const userCriado = await criarUsers(email, password);
      // Envia o post criado como resposta em formato JSON com status 200 (sucesso)
      res.status(200).json(userCriado);
    } catch(erro) {
      // Imprime o erro no console para depuração
      console.error(erro.message);
      // Envia uma mensagem de erro ao cliente com status 500 (erro interno do servidor)
      res.status(500).json({"Erro:":"falha na requisição"});
    }
  }