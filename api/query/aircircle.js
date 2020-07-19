import circleList from '../../constants/airdata'

export default function (req, res, next) {
  console.log(circleList)
  const circle = circleList.find(e => {
    return e.circleId === req.body.name.toLowerCase()
  })
  res.json(circle)
}
