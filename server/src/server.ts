import  express  from "express";
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('HTTP server running!');
});


//   ESTUDO PARA RELEMBRAR //
// GET = Buscar informação
// POST = Cadastrar informação
// PUT = Atualizar informações de uma entidade
// PATH = Atualizar UMA informações de uma entidade
// DELETE =  Deletar UMA informação