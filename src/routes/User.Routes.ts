import { Router } from 'express'

import { CreateUserController } from '../modules/User/CreateUser/CreateUserControllers'

const createUserController = new CreateUserController()

const user = Router()

user.post('/', createUserController.handle)

export { user }
