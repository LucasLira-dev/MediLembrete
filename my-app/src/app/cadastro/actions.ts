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

  try{
      const resposta = await API_MideLembrete.usuarios.create(cadastro)
      return resposta;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
     if (error?.message?.includes("Email já cadastrado")) {
        return { error: "Email já cadastrado" }
    }
    return { error: "Email já cadastrado" }
  }
  
     


}