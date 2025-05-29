'use server'

import { API_MideLembrete } from "@/shared/service"



export default async function cadastrarMedicamento(
  formData: FormData
) {

  const nome = formData.get('nome') as string
  const dosagem = formData.get('dosagem') as string
  const horario = formData.get('horario') as string
  const userId = formData.get('userId') as string;


  const medicamento = {
    userId: userId,
    nome: nome,
    dosagem: dosagem,
    horario: horario
  }
  console.log(medicamento)
  await API_MideLembrete.medicamentos.create(medicamento)
}