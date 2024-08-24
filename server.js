const express = require("express");
const routes = require("./routes"); // Verifique se o caminho está correto

const app = express();

app.use(express.json());
app.use('/api', routes); // Corrigido de '/api,' para '/api'

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
