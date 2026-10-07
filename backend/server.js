import express from "express";
import dotenv from "dotenv";
import produtosRoutes from "./routes/alimentos/produtos.js";
import geladeirasRoutes from "./routes/geladeiras/geladeiras.js";
import cors from "cors";
dotenv.config();
const app = express();
const port = 3005;

app.use(cors());
app.use(express.json());

app.use("/api/alimentos/", produtosRoutes);
app.use("/api/geladeiras/", geladeirasRoutes);

app.use((e, req, res, next) => {
  console.error("Erro: ", e.message);
  res.status(500).json({
    mensagem: "Falha interna do servidor",
    erro: e.message
  });
});

app.listen(port, () => {
  console.log(`Server rodadando em http://localhost:${port}`);

});