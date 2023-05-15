import { Router } from 'express'
import { user } from './User.Routes'

const routes = Router()

routes.use('/user', user)

export {routes}
