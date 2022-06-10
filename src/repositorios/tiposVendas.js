const query = require("../infraestrutura/database/queries");

class TiposVendas {
  adicionar(tipoVenda){
    const sql = "INSERT INTO TiposVendas SET ?";
    return query(sql, tipoVenda);
  }

  listar(){
    const sql = "SELECT * FROM TiposVendas";
    return query(sql);
  }

  async listarPorId(id){
    const sql = "SELECT * FROM TiposVendas WHERE id = ?";
    
    const retorna = await query(sql, id);
    return retorna[0];
  }

  alterar(id, dadosAtualizado){
    const sql = "UPDATE TiposVendas SET ? WHERE id = ?";
    return query(sql, [dadosAtualizado, id]);
  }

  excluir(id){
    const sql = "DELETE FROM TiposVendas WHERE id = ?";
    return query(sql, id);
  }

}

module.exports = new TiposVendas();