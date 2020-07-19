import express from 'express'

import airlistHandler from './airlist'
import aircircleHandler from './aircircle'
import arrangelistHandler from './arrangelist'
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

router.post('/airlist', airlistHandler)
router.post('/aircircle', aircircleHandler)
router.post('/arrangelist', arrangelistHandler)
router.post('/circle', circleHandler)

export default {
  path: '/query',
  handler: router
}
