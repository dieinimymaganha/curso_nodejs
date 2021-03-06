import * as restify from 'restify'
import * as mongoose from 'mongoose'
import {ModelRouter} from '../common/model-router'
import {Review} from './reviews.model'
import {authorize} from '../security/authz.handler'

class ReviewsRouter extends ModelRouter<Review>{

  constructor(){
    super(Review)
  }

  envelope(document){
    let resource = super.envelope(document)
    resource._links.restaurant = `/restaurant/${resource._id}/restaurant`
    return resource
  }

  protected prepareOne(query: mongoose.DocumentQuery<Review,Review>):mongoose.DocumentQuery<Review,Review>{
    return query.populate('user', 'name')
                .populate('restaurant', 'name')
  }

  /*findById = (req, resp, next)=>{
    this.model.findById(req.params.id)
        .populate('user', ' name')
        .populate('restaurant', 'name')
        .then(this.render(resp, next))
        .catch(next)
  }*/

  applyRouters(application: restify.Server){

    application.get(`${this.basePath}`, this.findAll)
    application.get(`${this.basePath}/:id`, [this.validateId, this.findById])
    application.post(`${this.basePath}`, [authorize('admin'),this.save])
  }

}

export const reviewsRouter = new ReviewsRouter()
