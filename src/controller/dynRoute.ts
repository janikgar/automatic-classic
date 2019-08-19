import { Router } from 'express';

class DynRouter {
    private routes: Array<any>;
    public router: Router;

    constructor(routeList: Array<any>) {
        this.routes = routeList;
        this.router = this.makeRoutes();
    }

    public makeRoutes = () => {
        let newRouter = Router();
        for (let route of this.routes) {
            switch(route.verb) {
            case 'get':
                newRouter.get(route.route, (_, res) => {res.json(route.return)})
            case 'put':
                newRouter.put(route.route, (_, res) => {res.json(route.return)})
            case 'post':
                newRouter.post(route.route, (_, res) => {res.json(route.return)})
            case 'delete':
                newRouter.delete(route.route, (_, res) => {res.json(route.return)})
            case 'options':
                newRouter.options(route.route, (_, res) => {res.json(route.return)})
            case 'patch':
                newRouter.patch(route.route, (_, res) => {res.json(route.return)})
            case 'all':
                newRouter.all(route.route, (_, res) => {res.json(route.return)})
            }
        }
        return newRouter;
    }
}

export default DynRouter