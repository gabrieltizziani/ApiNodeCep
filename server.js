const express = require("express");
const cors = require("cors");  // Importe o pacote cors
const routes = require("./routes");

const app = express();

// Configuração do middleware CORS
app.use(cors());  // Permite todas as origens por padrão

app.use(express.json());

// Suas rotas
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
