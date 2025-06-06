"use server"

import { API_MideLembrete } from "@/shared/service";

export default async function medicamentoEditado(
  formData: FormData,
  id: number
) {

  const nome = formData.get('nome') as string
  const dosagem = formData.get('dosagem') as string
  const horario = formData.get('horario') as string

   
  const medicamento = {
    nome: nome,
    dosagem: dosagem,
    horario: horario
  }
  console.log(medicamento, id)
  await API_MideLembrete.medicamentos.update(id, medicamento)
}