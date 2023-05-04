import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Database } from './utils/database';
import usuariosRouter from './routes/usuarios.router';
import empresasRouter from './routes/empresas.router';
import categoriasRouter from './routes/categorias.router';
import motoristasRouter from './routes/motoristas.router';
import administradoresRouter from './routes/administradores.router';
import pedidosRouter from './routes/pedidos.router';
import productosRouter from './routes/productos.router';
import ordenesRouter from './routes/ordenes.router';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const database:Database = new Database();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/usuarios', usuariosRouter);
app.use('/administradores', administradoresRouter);
app.use('/motoristas', motoristasRouter);
app.use('/empresas', empresasRouter);
app.use('/productos', productosRouter);
app.use('/categorias', categoriasRouter);
app.use('/pedidos', pedidosRouter);
app.use('/ordenes', ordenesRouter);

app.listen(port, () => {
  console.log(`⚡️Servidor tecnoshop levantado en el puerto:${port}`);
});