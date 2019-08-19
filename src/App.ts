import express from 'express';
import router from './controller/routes';
import './model/data';

class App {
    public app: express.Application;
    public port: number;

    constructor() {
        this.app = express();
        this.port = 3000;
    }

    public listen() {
        this.setRoutes();
        this.app.listen(this.port, () => {
            console.log(`App start on port ${this.port}`)
        });
    }

    private setRoutes() {
        this.app.use(router);
    }

}

export default App;  