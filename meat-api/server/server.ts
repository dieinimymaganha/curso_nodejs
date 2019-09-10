import * as restify from 'restify'
import * as mongoose from 'mongoose'
import {enviroment} from '../common/enviroment'
import {Router} from '../common/router'

export class Server {

  application: restify.Server

  initializeDb(){
    return mongoose.connect(enviroment.db.url,{
      useMongoClient: true
    })
  }

  initRoutes(routers: Router[]): Promise<any>{

    return new Promise((resolve, reject)=>{
      try{

        this.application = restify.createServer({
          name: 'meat-api',
          version: '1.0.0'
        })

        this.application.use(restify.plugins.queryParser())

        //Routes
        for (let router of routers){
          router.applyRouters(this.application)
        }

        this.application.listen(enviroment.server.port, ()=>{
          resolve(this.application)
        })

      }catch(error){
        reject(error)
      }
    })
  }
  bootstrap(routers: Router[] = []): Promise<Server>{
    return this.initializeDb().then(() =>
           this.initRoutes(routers).then(() => this))
  }
}
