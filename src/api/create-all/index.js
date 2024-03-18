import { Router } from 'express'
import { token } from '../../services/passport'
import { create } from './controller'

const router = new Router()

/**
 * @api {post} /create-all Create create all
 * @apiName CreateCreateAll
 * @apiGroup CreateAll
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} createAll Create all's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Create all not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  create)

export default router
