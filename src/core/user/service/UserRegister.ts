import UseCase from "../../shared/UseCase.ts";
import UserCollection from "../data/UserCollection.ts";
import CryptoProvider from "../model/CryptoProvider.ts";
import User from "../model/User.ts";

export default class UserRegister implements UseCase<Required<User>, void> {
    constructor(private cryptoProvider: CryptoProvider) {}

    async run(user: Required<User>): Promise<void> {
        const cryptoPassword = await this.cryptoProvider.encrypt(user.password)
        const userWithCryptoPassword = { ...user, password: cryptoPassword }

        const collection = new UserCollection()
        await collection.add(userWithCryptoPassword)
    }
}