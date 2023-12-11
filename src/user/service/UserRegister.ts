import UseCase from "../../shared/UseCase.ts";
import UserCollection from "../data/UserCollection.ts";
import User from "../model/User.ts";

export default class UserRegister implements UseCase<Required<User>, void> {
    async run(user: Required<User>): Promise<void> {
        const criptoPassword = user.password.split('').reverse().join('')
        const userWithCriptoPassword = { ...user, password: criptoPassword }

        const collection = new UserCollection()
        await collection.add(userWithCriptoPassword)
    }
}