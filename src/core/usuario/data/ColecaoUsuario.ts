import Usuario from "../model/Usuario.ts"

export default class ColecaoUsuario {
    static readonly usuarios: Usuario[] = []

    async adicionar(usuario: Usuario): Promise<void> {
        ColecaoUsuario.usuarios.push(usuario)
    }

    async buscarPorEmail(email: string): Promise<Usuario | null>{
        return ColecaoUsuario.usuarios.find(usuario => usuario.email === email) ?? null
    }
}