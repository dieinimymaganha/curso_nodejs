import {Router} from '../common/router'
import * as restify from 'restify'

class UsersRouter extends Router{
  applyRouters(application: restify.Server){
    application.get('/users', (req, resp, next)=>{
      resp.json({messagem: 'users router'})
    })
  }
}

export const usersRouter = new UsersRouter()
