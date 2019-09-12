import {ModelRouter} from '../common/model-router'
import * as restify from 'restify'
import {NotFoundError} from 'restify-errors'
import {Restaurant} from './restaurants.model'

class RestaurantsRouter extends ModelRouter<Restaurant> {
  constructor(){
    super(Restaurant)
  }

  findMenu = (req, resp, next) => {
    Restaurant.findById(req.paramas.id, "+menu").then(rest =>{
      if(!rest){
        throw new NotFoundError('Restaurant not found')
        }else{
          resp.json(rest.menu)
          return next()
          }
        }).catch(next)
  }

  applyRouters(application: restify.Server){
    application.get('/restaurants', this.findAll)
    application.get('/restaurants/:id', [this.validateId, this.findById])
    application.post('/restaurants', this.save)
    application.put('/restaurants/:id', [this.validateId, this.replace])
    application.patch('/restaurants/:id', [this.validateId, this.update])
    application.del('/restaurants/:id',[this.validateId, this.delete])
  }

}

export const restaurantsRouter = new RestaurantsRouter()
