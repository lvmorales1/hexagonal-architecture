import CasoDeUso from "../../shared/CasoDeUso.ts";
import ColecaoUsuario from "../data/ColecaoUsuario.ts";
import Usuario from "../model/Usuario.ts";

export type LoginUsuarioEntrada = {
    email: string
    senha: string
}

export default class LoginUsuario implements CasoDeUso<LoginUsuarioEntrada, Usuario | null> {
    async executar(dto: LoginUsuarioEntrada): Promise<Usuario | null> {
        const colecao = new ColecaoUsuario()
        
        const usuario = await colecao.buscarPorEmail(dto.email)
        if (!usuario) return null

        const senhaCripto = dto.senha.split('').reverse().join('')
        if (usuario.senha !== senhaCripto) return null

        return {
            nome: usuario.nome,
            email: usuario.email
        }
    }
}