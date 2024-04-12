import InverterCripto from "./adapters/InverterCripto.ts";
import LoginUsuario from "./core/usuario/service/LoginUsuario.ts";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario.ts";

const provedorCripto = new InverterCripto()
const registrar = new RegistrarUsuario(provedorCripto)

await registrar.executar({
    nome: 'Fulano',
    email: 'fulano@fulaninho',
    senha: '123456'
})

const login = new LoginUsuario(provedorCripto)
const usuario = await login.executar({
    email: 'fulano@fulaninho',
    senha: '123456'
})

console.log(usuario)