import ColecaoUsuarioMemoria from "./adapters/ColecaoUsuarioMemoria.ts";
import LoginUsuario from "./core/usuario/service/LoginUsuario.ts";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario.ts";
import RealCripto from "./adapters/RealCripto.ts";

const provedorCripto = new RealCripto()
const colecaoUsuario = new ColecaoUsuarioMemoria()
const registrar = new RegistrarUsuario(colecaoUsuario, provedorCripto)

await registrar.executar({
    nome: 'Fulano',
    email: 'fulano@fulaninho',
    senha: '123456'
})

const login = new LoginUsuario(colecaoUsuario, provedorCripto)
const usuario = await login.executar({
    email: 'fulano@fulaninho',
    senha: '123456'
})

console.log(usuario)