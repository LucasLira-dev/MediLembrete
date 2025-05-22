// "use client"

// interface LoadingComponentProps {
//   message?: string
//   className?: string
//   svgSize?: number
//   darkMode?: boolean
// }

// export default function Loading({
//   message = "Carregando medicamentos...",
//   className = "",
//   svgSize = 200,
//   darkMode = true,
// }: LoadingComponentProps) {
//   // Cores baseadas no modo (escuro por padrão)
//   const primaryColor = darkMode ? "#60a5fa" : "#3b82f6" // blue-400 : blue-600
//   const secondaryColor = darkMode ? "#1e3a8a" : "#dbeafe" // blue-900 : blue-100
//   const pillColor1 = darkMode ? "#f87171" : "#ef4444" // red-400 : red-500
//   const pillColor2 = darkMode ? "#4ade80" : "#22c55e" // green-400 : green-500
//   const textColor = darkMode ? "#f9fafb" : "#1f2937" // gray-50 : gray-800

//   // Classes CSS baseadas no modo
//   const containerClasses = darkMode
//     ? "border-gray-700 bg-gray-800 text-gray-100"
//     : "border-gray-200 bg-white text-gray-900"

//   const descriptionClasses = darkMode ? "text-gray-400" : "text-gray-500"

//   return (
//     <div className={`flex flex-col items-center justify-center rounded-lg border p-8 ${containerClasses} ${className}`}
//     style={{minHeight: '300px'}}>
//       <div className="mb-4 text-center">
//         <svg width={svgSize} height={svgSize} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//           {/* Círculo de carregamento externo */}
//           <circle cx="60" cy="60" r="54" stroke={secondaryColor} strokeWidth="6" />

//           {/* Círculo de carregamento animado */}
//           <circle
//             cx="60"
//             cy="60"
//             r="54"
//             stroke={primaryColor}
//             strokeWidth="6"
//             strokeLinecap="round"
//             strokeDasharray="339.292"
//             strokeDashoffset="169.646"
//             className="animate-[spin_2s_linear_infinite]"
//           />

//           {/* Frasco de remédio */}
//           <g className="animate-[pulse_2s_ease-in-out_infinite]">
//             <path
//               d="M45 35H75V80C75 85.5228 70.5228 90 65 90H55C49.4772 90 45 85.5228 45 80V35Z"
//               fill={primaryColor}
//               fillOpacity="0.3"
//             />
//             <path d="M42 35H78V40H42V35Z" fill={primaryColor} />
//             <path d="M48 30H72V35H48V30Z" fill={primaryColor} />

//             {/* Pílulas animadas */}
//             <circle cx="55" cy="50" r="5" fill={pillColor1} className="animate-[bounce_1s_ease-in-out_infinite]" />
//             <circle cx="65" cy="65" r="5" fill={pillColor2} className="animate-[bounce_1.3s_ease-in-out_infinite]" />
//             <circle cx="55" cy="75" r="5" fill={pillColor1} className="animate-[bounce_0.9s_ease-in-out_infinite]" />
//           </g>

//           {/* Texto "Loading" */}
//           <text
//             x="60"
//             y="110"
//             fontFamily="sans-serif"
//             fontSize="10"
//             fontWeight="bold"
//             fill={textColor}
//             textAnchor="middle"
//             className="animate-[pulse_1.5s_ease-in-out_infinite]"
//           >
//             CARREGANDO
//           </text>
//         </svg>
//       </div>
//       <h3 className="mb-2 text-lg font-medium">{message}</h3>
//       <p className={`max-w-md text-center ${descriptionClasses}`}>
//         Estamos buscando seus dados, isso levará apenas alguns instantes.
//       </p>
//     </div>
//   )
// }


"use client"

interface LoadingComponentProps {
  message?: string
  className?: string
  svgSize?: number
  darkMode?: boolean
}

export default function Loading({
  message = "Carregando medicamentos...",
  className = "",
  svgSize = 200,
  darkMode = true,
}: LoadingComponentProps) {
  // Cores baseadas no modo (escuro por padrão)
  const primaryColor = darkMode ? "#60a5fa" : "#3b82f6"
  const secondaryColor = darkMode ? "#1e3a8a" : "#dbeafe"
  const pillColor1 = darkMode ? "#f87171" : "#ef4444"
  const pillColor2 = darkMode ? "#4ade80" : "#22c55e"
  const textColor = darkMode ? "#f9fafb" : "#1f2937"

  return (
    <div 
      className={`flex flex-col items-center justify-center rounded-lg border ${className}`}
      style={{
        backgroundColor: darkMode ? '#111827' : '#ffffff',
        borderColor: darkMode ? '#374151' : '#e5e7eb',
        height: '100%',
        width: '100%'
      }}
    >
      <div className="flex flex-col items-center p-8">
        <div className="mb-4 text-center">
          <svg width={svgSize} height={svgSize} viewBox="0 0 120 120" fill="none">
            {/* Círculo de carregamento externo */}
            <circle cx="60" cy="60" r="54" stroke={secondaryColor} strokeWidth="6" />

            {/* Círculo de carregamento animado */}
            <circle
              cx="60"
              cy="60"
              r="54"
              stroke={primaryColor}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="339.292"
              strokeDashoffset="169.646"
              className="animate-[spin_2s_linear_infinite] origin-center"
            />

            {/* Frasco de remédio */}
            <g className="animate-[pulse_2s_ease-in-out_infinite]">
              <path
                d="M45 35H75V80C75 85.5228 70.5228 90 65 90H55C49.4772 90 45 85.5228 45 80V35Z"
                fill={primaryColor}
                fillOpacity="0.3"
              />
              <path d="M42 35H78V40H42V35Z" fill={primaryColor} />
              <path d="M48 30H72V35H48V30Z" fill={primaryColor} />

              {/* Pílulas animadas */}
              <circle cx="55" cy="50" r="5" fill={pillColor1} className="animate-[bounce_1s_ease-in-out_infinite]" />
              <circle cx="65" cy="65" r="5" fill={pillColor2} className="animate-[bounce_1.3s_ease-in-out_infinite]" />
              <circle cx="55" cy="75" r="5" fill={pillColor1} className="animate-[bounce_0.9s_ease-in-out_infinite]" />
            </g>

            {/* Texto "Loading" */}
            <text
              x="60"
              y="110"
              fontFamily="sans-serif"
              fontSize="10"
              fontWeight="bold"
              fill={textColor}
              textAnchor="middle"
              className="animate-[pulse_1.5s_ease-in-out_infinite]"
            >
              CARREGANDO
            </text>
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-medium">{message}</h3>
        <p className={`max-w-md text-center ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
          Estamos buscando seus dados, isso levará apenas alguns instantes.
        </p>
      </div>
    </div>
  )
}