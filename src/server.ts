import express from "express";
import "express-async-errors";

import { router } from "./routes";

const app = express();
const PORT = 3000;

/* Permitir o formato JSON. */
app.use(express.json());

/* Utilizando o arquivo de rotas */
app.use(router);

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
