import * as restify from 'restify'
import * as jwt from 'jsonwebtoken'
import {User} from '../users/users.model'
import {enviroment} from '../common/enviroment'

export const tokenParser : restify.RequestHandler = (req, resp, next) =>{
  const token = extractToken(req)
  if (token){
    jwt.verify(token, enviroment.security.apiSecret, applyBearer(req, next))
  }else{
    next()
  }
}


function extractToken(req: restify.Request) {
    //Authorization: Bearer TOKEN
    const authorization = req.header('authorization')
    let token = undefined
    if(authorization){
      const parts: string[] = authorization.split(' ')
      if (parts.length === 2 && parts[0] ==='Bearer') {
        token = parts[1]
      }
    }
    return token
}


function applyBearer(req: restify.Request, next): (error, decoded) => void {
  return (error, decoded) =>{
    if(decoded){
      User.findByEmail(decoded.sub).then(user =>{
        if(user){
          //associar o usuário no Request
          req.authenticated = user
        }
        next()
      }).catch(next)
    }else{
      next()
    }
  }

}
