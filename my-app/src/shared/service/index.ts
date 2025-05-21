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
    }
}