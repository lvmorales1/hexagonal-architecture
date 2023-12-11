import CryptoProvider from "../core/user/model/CryptoProvider.ts";

export default class CryptoInvert implements CryptoProvider {
    // deno-lint-ignore require-await
    async encrypt(password: string): Promise<string> {
        return password.split('').reverse().join('')
    }

    // deno-lint-ignore require-await
    async compare(password: string, cryptoPassword: string): Promise<boolean> {
        return password.split('').reverse().join('') === cryptoPassword
    }
}