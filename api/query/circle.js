import circleList from '../../constants/data'

export default function (req, res, next) {
  console.log(circleList)
  const circle = circleList.find(e => {
    return e.circleId === req.body.name.toLowerCase()
  })
  res.json(circle)
}
