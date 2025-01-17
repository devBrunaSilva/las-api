const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const ENV = process.env.NODE_ENV;

module.exports = () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


  app.get("/", (req,res) => {
    res.send("Bem vindo ao LAS-API");
  });

  consign().include("src/controllers").into(app);

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // Erro interno da aplicação
    if(err.erroApp){
      res.status(400).send(err.erroApp);

      // Erro servidor em ambiente que não é de produção
    }else if(ENV !== "production") { 
      res.status(500).send({ error: err.message });

      // Erro servidor em ambiente de produção
    }else{ 
      res.status(500).send({ error: "Algo deu errado..." });
    }
  });

  return app;
};
