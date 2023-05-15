import { database } from '../../../database/db'

export class FindAllUserUseCase {
	async execute() {
		try {
			const users = await database.user.findMany({
				select: {
					id: true,
					name: true,
					email: true,
					Post: {
						select: {
							id: true,
							title: true,
							content: true,
						},
					},
				},
			})

			return users
		} catch (error) {
			console.error(error)
		}
	}
}
