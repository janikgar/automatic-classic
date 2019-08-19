import "./dynRoute";
import DynRouter from "./dynRoute";

var routes = [
    {
        "verb": "get",
        "route": "/",
        "return": { "response": "hello" }
    },
    {
        "verb": "get",
        "route": "/test",
        "return": { "response": "world" }
    },
    {
        "verb": "get",
        "route": "/foo",
        "return": { "response": "bar" }
    }
]

var router = new DynRouter(routes).router

export default router