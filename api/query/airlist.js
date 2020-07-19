import circleList from '../../constants/airdata'

export default function (req, res, next) {
  console.log(circleList)
  const list = circleList.map(e => {
    return {
      id: e.circleId,
      name: e.circleName,
      number: e.boothNumber,
      image: e.circleImage,
      description: e.description,
    }
  }).sort((a, b) => {
    if(a.number < b.number) { return -1; }
    if(a.number > b.number) { return 1; }
    return 0;
  })
  res.json(list)
}
