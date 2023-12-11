import UserLogin from "./user/service/UserLogin.ts";
import UserRegister from "./user/service/UserRegister.ts";

// user register
const register = new UserRegister();

register.run({
    name: "John Lennon",
    email: "johnlennon@john.com",
    password: "123456"
});

// user login
const login = new UserLogin();
const user = await login.run({
    email: "johnlennon@john.com",
    password: "123456"
});

console.log(user);