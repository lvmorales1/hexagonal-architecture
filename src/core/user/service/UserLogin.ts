import UseCase from "../../shared/UseCase.ts";
import UserCollection from "../data/UserCollection.ts";
import CryptoProvider from "../model/CryptoProvider.ts";
import User from "../model/User.ts";

export type UserLoginDTO = {
    email: string
    password: string
}

export default class UserLogin implements UseCase<UserLoginDTO, User | null> {
    constructor(private cryptoProvider: CryptoProvider) {}
    
    async run(dto: UserLoginDTO): Promise<User | null> {
        const collection = new UserCollection()
        
        const user = await collection.searchEmail(dto.email)
        if (!user) return null

        const equals = await this.cryptoProvider.compare(dto.password, user.password!)

        if (!equals) return null

        return {
            name: user.name,
            email: user.email
        }
    }
}