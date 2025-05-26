'use server'

import { API_MideLembrete } from "@/shared/service"


export default async function cadastrarUsuario(
  formData: FormData
) {
  
  const email = formData.get('email') as string
  const senha = formData.get('senha') as string

  const cadastro = {
    email: email,
    senha: senha
  }
  
     const resposta = await API_MideLembrete.usuarios.login(cadastro)
    
    return resposta;


}