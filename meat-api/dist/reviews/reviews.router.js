"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../common/model-router");
const reviews_model_1 = require("./reviews.model");
const authz_handler_1 = require("../security/authz.handler");
class ReviewsRouter extends model_router_1.ModelRouter {
    constructor() {
        super(reviews_model_1.Review);
    }
    envelope(document) {
        let resource = super.envelope(document);
        resource._links.restaurant = `/restaurant/${resource._id}/restaurant`;
        return resource;
    }
    prepareOne(query) {
        return query.populate('user', 'name')
            .populate('restaurant', 'name');
    }
    /*findById = (req, resp, next)=>{
      this.model.findById(req.params.id)
          .populate('user', ' name')
          .populate('restaurant', 'name')
          .then(this.render(resp, next))
          .catch(next)
    }*/
    applyRouters(application) {
        application.get(`${this.basePath}`, this.findAll);
        application.get(`${this.basePath}/:id`, [this.validateId, this.findById]);
        application.post(`${this.basePath}`, [authz_handler_1.authorize('admin'), this.save]);
    }
}
exports.reviewsRouter = new ReviewsRouter();
