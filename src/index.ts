import CryptoInvert from "./adapters/CryptoInvert.ts";
import UserLogin from "./core/user/service/UserLogin.ts";
import UserRegister from "./core/user/service/UserRegister.ts";

const cryptoProvider = new CryptoInvert();

// user register
const register = new UserRegister(cryptoProvider);

await register.run({
    name: "John Lennon",
    email: "johnlennon@john.com",
    password: "123456"
});

// user login
const login = new UserLogin(cryptoProvider);
const user = await login.run({
    email: "johnlennon@john.com",
    password: "123456"
});

console.log(user);