const Car = require('./cars-model')
const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const car = await Car.getById(req.params.id)
    if(!car){
      res.status(404).json({
        message:"car with id <car id> is not found"
      })
    } else {
      req.car = car
      next()
    }
  }catch(err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if(!req.body.vin) return next({
    status: 400, 
    message:"vin is missing" 
  })
  if(!req.body.make) return next({
    status: 400, 
    message:"make is missing" 
  })
  if(!req.body.model) return next({
    status: 400, 
    message:"model is missing" 
  })
  if(!req.body.mileage) return next({
    status: 400, 
    message:"mileage is missing" 
  })
  next()
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}