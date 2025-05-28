import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css"

import SessionWrapper from "@/app/SessionWrapper";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MediLembrete - Gerenciador de Horários de Medicamentos",
  description: "Gerencie facilmente os horários em que você deve tomar seus medicamentos",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={inter.className}
      >
        <SessionWrapper>
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
