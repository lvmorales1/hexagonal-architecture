import UseCase from "../../shared/UseCase.ts";
import UserCollection from "../data/UserCollection.ts";
import User from "../model/User.ts";

export type UserLoginDTO = {
    email: string
    password: string
}

export default class UserLogin implements UseCase<UserLoginDTO, User | null> {
    async run(dto: UserLoginDTO): Promise<User | null> {
        const collection = new UserCollection()
        
        const user = await collection.searchEmail(dto.email)
        if (!user) return null

        const criptoPassword = dto.password.split('').reverse().join('')
        if (user.password !== criptoPassword) return null

        return {
            name: user.name,
            email: user.email
        }
    }
}