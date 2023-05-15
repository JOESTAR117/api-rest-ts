import { database } from '../../../database/db'
import { UserDTO } from '../../../dtos/User/UserDto'

export class CreateUserUseCase {
	constructor(private data: UserDTO) {}
	async execute() {
		try {
			const userExists = await database.user.findUnique({
				where: {
					email: this.data.email,
				},
			})

			if (userExists) {
				//ErrorMessage
			}

			const user = await database.user.create({
				data: {
					name: this.data.name,
					email: this.data.email,
				},
			})

			return user
		} catch (error) {
			console.error(error)
		}
	}
}
