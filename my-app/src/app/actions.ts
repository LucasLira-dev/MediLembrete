// "use server"

// import { signIn } from "@/auth";

// export default async function handleLogin(
//   formData: FormData
// ) {
  
//   try{
//     const resposta = await signIn('credentials', {
//       email: formData.get('email') as string,
//       senha: formData.get('senha') as string,
//       redirect: false
//     })
//     if(resposta){
//       console.log("Login bem-sucedido:", resposta)
//     }

//   } catch (error) {
//     console.error("Erro ao fazer login:", error)
//     return { error: "Erro ao fazer login. Verifique suas credenciais." }
//   }
// }

// "use server";

// import { signIn } from "@/auth";

// export async function handleLogin(formData: FormData) {
//   try {
//     await signIn('credentials', {
//       email: formData.get("email"),
//       senha: formData.get("senha"),
//       redirect: false
//     });
    
//     return { success: true };
    
//   } catch (error) {
//     console.error("Erro ao fazer login:", error);
//     return { error: "Credenciais inválidas" };
//   }
// }