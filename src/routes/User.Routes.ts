import { Router } from 'express'

import { CreateUserController } from '../modules/User/CreateUser/CreateUserControllers'
import { FindAllUserController } from '../modules/User/FindAllUser/FindAllUserController'

const createUserController = new CreateUserController()
const findAllUserController = new FindAllUserController()

const user = Router()

user.post('/', createUserController.handle)
user.get('/', findAllUserController.handle)

export { user }
