"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react"
import Link from "next/link"

export default function LoginPageSimplified() {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const email = (form.email as HTMLInputElement).value
    const senha = (form.senha as HTMLInputElement).value

    const result = await signIn("credentials", {
      email,
      senha,
      redirect: false, // importante: evita redirecionamento automático
    })

    if (result?.error) {
      setError("Email ou senha inválidos")
    } else {
      router.push("/medicamentos") // redireciona para a página após login
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      <header className="flex items-center justify-center p-6">
        <div className="text-2xl font-bold text-blue-400">MediLembrete</div>
      </header>

      <main className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-lg border border-gray-700 bg-gray-800 p-8 shadow-xl">
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-gray-100">Bem-vindo de volta</h1>
              <p className="mt-3 text-gray-400">Entre na sua conta para gerenciar seus medicamentos</p>
            </div>

            {error && <p className="mb-4 text-center text-sm text-red-500">{error}</p>}

            <form onSubmit={handleLogin}>
              {/* Email */}
              <div className="space-y-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="block w-full rounded-md border border-gray-600 bg-gray-700 py-3 pl-10 pr-3 text-gray-100 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Senha */}
              <div className="mt-4 space-y-3">
                <label htmlFor="senha" className="block text-sm font-medium text-gray-300">
                  Senha
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    id="senha"
                    name="senha"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    className="block w-full rounded-md border border-gray-600 bg-gray-700 py-3 pl-10 pr-12 text-gray-100 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-300 focus:outline-none"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Botão */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Entrar
                </button>
              </div>
            </form>

            {/* Link cadastro */}
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Não tem uma conta?{" "}
                <Link href="/cadastro" className="text-blue-400 hover:text-blue-300 hover:underline">
                  Cadastre-se aqui
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
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
