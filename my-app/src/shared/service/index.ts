export const API_MideLembrete = {
    getAll: async () => {
        const response = await fetch('https://api-medilembrete-production.up.railway.app/medicamento', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar medicamentos');
        }

        const data = await response.json();
        return data;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    create: async (medicamento: any) => {
        const response = await fetch('https://api-medilembrete-production.up.railway.app/medicamento', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(medicamento),
        });

        if (!response.ok) {
            throw new Error('Erro ao criar medicamento');
        }

        const data = await response.json();
        return data;
    }
}