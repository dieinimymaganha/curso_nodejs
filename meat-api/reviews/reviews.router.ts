import * as restify from 'restify'
import * as mongoose from 'mongoose'
import {ModelRouter} from '../common/model-router'
import {Review} from './reviews.model'

class ReviewsRouter extends ModelRouter<Review>{

  constructor(){
    super(Review)
  }

  applyRouters(application: restify.Server){

    application.get('/reviews', this.findAll)
    application.get('/reviews/:id', [this.validateId, this.findById])
    application.post('/reviews', this.save)
  }

}

export const reviewsRouter = new ReviewsRouter()