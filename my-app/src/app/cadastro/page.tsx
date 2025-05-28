"use client";

import type React from "react";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, UserPlus } from "lucide-react";
import Link from "next/link";
import Form from "next/form";

import cadastrarUsuario from "./actions";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  // const [isLoading, setIsLoading] = useState(false)

  const [alerta, setAlerta] = useState<{
    title: string;
    description: string;
  } | null>(null);

  // const mostrarALert = (title: string, description: string) => {
  //   setAlerta({ title, description });
  // };


   const router = useRouter();
  const [erro, setErro] = useState<string | null>(null);

  async function handleCadastro(formData: FormData): Promise<void> {
    setErro(null);
    const resposta = await cadastrarUsuario(formData);

    if (resposta?.error) {
      setErro(resposta.error);
      return;
    }

    // Login automático após cadastro
    const loginRes = await signIn("credentials", {
      email: resposta.email,
      senha: resposta.senha,
      redirect: false,
    });

    if (loginRes?.error) {
      setErro("Erro ao fazer login após cadastro.");
    } else {
      router.push("/medicamentos");
    }
  }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsLoading(true)

  //   // Simular chamada de API
  //   await new Promise((resolve) => setTimeout(resolve, 2000))

  //   console.log("Register:", { email: formData.email, password: formData.password })
  //   setIsLoading(false)
  //   alert("Conta criada com sucesso!")
  // }

  return (
    <>
      {alerta && (
        <div className="fixed top-65 left-1/2 -translate-x-1/2 z-50 w-full max-w-md">
          <Alert className="bg-[#1E2C48] text-[#FFFFFF] p-4 rounded-md flex flex-col justify-center items-center gap-2">
            <AlertTitle>{alerta.title}</AlertTitle>
            <AlertDescription>{alerta.description}</AlertDescription>
            <button
              onClick={() => setAlerta(null)}
              className="rounded-md bg-[#16A34A] px-10 py-2 text-center cursor-pointer"
            >
              Ok
            </button>
          </Alert>
        </div>
      )}
          
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
        {/* Header */}
        <header className="flex items-center justify-between p-6">
          <Link href="/" className="text-2xl font-bold text-blue-400">
            MediLembrete
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-gray-300 hover:underline"
          >
            Voltar ao login
          </Link>
        </header>

        {/* Main Content */}
        <main className="flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            <div className="rounded-lg border border-gray-700 bg-gray-800 p-8 shadow-xl">
              {/* Header do formulário */}
              <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold text-gray-100">
                  Criar conta
                </h1>
                <p className="mt-3 text-gray-400">
                  Cadastre-se para começar a gerenciar seus medicamentos
                </p>
              </div>
              {/* {isLoading ? (
              <div className="flex justify-center py-12">
                <LoadingComponent message="Criando sua conta..." svgSize={80} />
              </div>
            ) : ( */}
              <Form
                action={handleCadastro}
                className="space-y-8"
              >
              
      {erro && <div className="text-red-500">{erro}</div>}
     
                {/* Campo Email */}
                <div className="space-y-3">
                    <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      className="block w-full rounded-md border border-gray-600 bg-gray-700 py-3 pl-10 pr-3 text-gray-100 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Campo Senha */}
                <div className="space-y-3">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Senha
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="senha"
                      placeholder="••••••••"
                      className="block w-full rounded-md border border-gray-600 bg-gray-700 py-3 pl-10 pr-12 text-gray-100 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-300 focus:outline-none focus:text-gray-300"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Botão de Cadastro */}
                <div className="pt-4">
                  <button
                    type="submit"
                    // disabled={isLoading}
                    className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <UserPlus className="mr-2 h-4 w-4" />
                    Criar conta
                  </button>
                </div>
              </Form>
              {/* Link para Login */}
              <div className="mt-8 text-center">
                <p className="text-gray-400">
                  Já tem uma conta?{" "}
                  <Link
                    href="/"
                    className="text-blue-400 hover:text-blue-300 hover:underline"
                  >
                    Faça login aqui
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

// function LoadingComponent({ message, svgSize }: { message?: string; svgSize?: number }) {
//   return (
//     <div className="inline-flex flex-col items-center justify-center rounded-lg border border-gray-700 bg-gray-800 p-6 text-gray-100">
//       <div className="mb-3 text-center">
//         <svg
//           width={svgSize || 120}
//           height={svgSize || 120}
//           viewBox="0 0 120 120"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {/* Círculo de carregamento externo */}
//           <circle cx="60" cy="60" r="54" stroke="#1e3a8a" strokeWidth="6" />

//           {/* Círculo de carregamento animado */}
//           <circle
//             cx="60"
//             cy="60"
//             r="54"
//             stroke="#60a5fa"
//             strokeWidth="6"
//             strokeLinecap="round"
//             strokeDasharray="339.292"
//             strokeDashoffset="169.646"
//             className="animate-spin"
//             style={{ animationDuration: "2s" }}
//           />

//           {/* Frasco de remédio */}
//           <g className="animate-pulse" style={{ animationDuration: "2s" }}>
//             <path
//               d="M45 35H75V80C75 85.5228 70.5228 90 65 90H55C49.4772 90 45 85.5228 45 80V35Z"
//               fill="#60a5fa"
//               fillOpacity="0.3"
//             />
//             <path d="M42 35H78V40H42V35Z" fill="#60a5fa" />
//             <path d="M48 30H72V35H48V30Z" fill="#60a5fa" />

//             {/* Pílulas animadas */}
//             <circle cx="55" cy="50" r="5" fill="#f87171" className="animate-bounce" />
//             <circle
//               cx="65"
//               cy="65"
//               r="5"
//               fill="#4ade80"
//               className="animate-bounce"
//               style={{ animationDelay: "0.3s", animationDuration: "1.3s" }}
//             />
//             <circle
//               cx="55"
//               cy="75"
//               r="5"
//               fill="#f87171"
//               className="animate-bounce"
//               style={{ animationDelay: "0.1s", animationDuration: "0.9s" }}
//             />
//           </g>

//           {/* Texto "Loading" */}
//           <text
//             x="60"
//             y="110"
//             fontFamily="sans-serif"
//             fontSize="10"
//             fontWeight="bold"
//             fill="#f9fafb"
//             textAnchor="middle"
//             className="animate-pulse"
//             style={{ animationDuration: "1.5s" }}
//           >
//             CARREGANDO
//           </text>
//         </svg>
//       </div>
//       {message && <h3 className="mb-1 text-base font-medium">{message}</h3>}
//     </div>
//   )
// }
