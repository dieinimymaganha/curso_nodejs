"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../common/router");
class UsersRouter extends router_1.Router {
    applyRouters(application) {
        application.get('/users', (req, resp, next) => {
            resp.json({ messagem: 'users router' });
        });
    }
}
exports.usersRouter = new UsersRouter();
