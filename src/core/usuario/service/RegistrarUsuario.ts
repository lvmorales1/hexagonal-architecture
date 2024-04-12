import CasoDeUso from "../../shared/CasoDeUso.ts";
import ColecaoUsuario from "../data/ColecaoUsuario.ts";
import ProvedorCripto from "../model/ProvedorCripto.ts";
import Usuario from "../model/Usuario.ts";

export default class RegistrarUsuario implements CasoDeUso<Required<Usuario>, void> {
    constructor(private provedorCripto: ProvedorCripto) {}

    async executar(usuario: Required<Usuario>): Promise<void> {
        const senhaCripto = await this.provedorCripto.criptografar(usuario.senha)
        const usuarioCripto = {...usuario, senha: senhaCripto}

        const colecao = new ColecaoUsuario()
        await colecao.adicionar(usuarioCripto)
    }
}