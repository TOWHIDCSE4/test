import express, {Application} from 'express';
import morgan from 'morgan';
//Routes
import IndexRoutes from './routes/index.routes'
import StoresRoutes from './routes/stores.routes'

export class App{
  private  app: Application;
    constructor(private port ?: number | string){
        this.app = express();
        this.setting();
        this.middlewares();
        this.routes();
    }
    setting(){
        this.app.set('port',this.port || process.env.port || 3000);
    }
    middlewares(){
        this.app.use(morgan('dev'))
    }
    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/stores',StoresRoutes);
    }
    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('server on port',this.app.get('port'));
    }
}