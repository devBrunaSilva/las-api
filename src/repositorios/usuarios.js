const query = require("../infraestrutura/database/queries");

class Usuario {

  adicionar(usuario){
    const sql = "INSERT INTO Usuarios SET ?";
    return query(sql, usuario);
  }

  listar(){
    const sql = "SELECT id, nome, urlFotoPerfil FROM Usuarios";
    return query(sql);
  }

  async buscarPorId(id){
    const sql= "SELECT id, nome, urlFotoPerfil FROM Usuarios WHERE id = ?";
    const retorna = await query(sql, id);
    return retorna[0];
  }

  async buscarPorNome(nome){
    const sql = "SELECT id, nome, urlFotoPerfil FROM Usuarios nome like ?";
    return query(sql, "%" + nome + "%");
  }

  alterar(id, dadosAtualizados){
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return query(sql, [dadosAtualizados, id]);
  }
  
  excluir(id){
    const sql = "DELETE FROM Usuarios WHERE id = ?";
    return query(sql,id);
  }

  // Dados Pessoais
  async listarDadosPessoais(id){
    const sql = "SELECT nomeCompleto, dataNascimento, rg, cpf FROM Usuarios WHERE id = ?";

    const retorna = await query(sql, id);
    return retorna[0];
  }

  alterarDadosPessoais(id, dadosPessoaisAtualizados) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return query(sql,[dadosPessoaisAtualizados, id]);
  }

  // Contatos
  async listarContatos(id) {
    const sql = "SELECT telefone, celular, email FROM Usuarios WHERE id = ?";
    
    const retorna = await query(sql, id);
    return retorna[0];
  }

  alterarContatos(id, dadosContatosAtualizados){
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return query(sql, [dadosContatosAtualizados, id]);
  }

  // Senha
  alterarSenha(id, dadosSenhaAtualizada) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";

    return query(sql, [dadosSenhaAtualizada, id]);
  }

  // Endereço
  async listarEndereco(id){
    const sql = "SELECT cep, endereco, numero, complemento, bairro FROM Usuarios WHERE id = ?";
   
    const retorna = await query(sql, id);
    return retorna[0];
  }

  alterarEndereco(id, dadosEnderecoAtualizada){
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";

    return query(sql, [dadosEnderecoAtualizada, id]);
  }


  isNomeUsuarioUtilizado(nome){
    const sql = "SELECT * FROM Usuarios WHERE nome = ?";
    return query(sql, nome).then((data) => {
      if (data.length > 0) {
        return true;
      } else {
        return false;
      }
    });
  }
   
}

module.exports = new Usuario();