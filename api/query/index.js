import express from 'express'
import listHandler from './list'
import circleHandler from './circle'

const router = express.Router()
const app = express()

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next()
})

router.post('/list', listHandler)
router.post('/circle', circleHandler)

export default {
  path: '/query',
  handler: router
}
