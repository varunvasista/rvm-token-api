import { Router } from 'express'
import { token } from '../../services/passport'
import { balance } from './controller'

const router = new Router()

/**
 * @api {post} /balanceall Create balanceall
 * @apiName CreateBalanceall
 * @apiGroup Balanceall
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} balanceall Balanceall's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Balanceall not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  balance)

export default router
