export const API_MideLembrete = {
    usuarios: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        create: async(usuario: any) => {
            try{
                const response = await fetch('https://api-medilembrete-production.up.railway.app/usuario', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(usuario),
                });

                const data = await response.json();

                if (!response.ok) {
                    // Mostra o erro completo do backend se disponível
                    throw new Error(data.message || `Erro ${response.status}: ${response.statusText}`);
                }
                	
                return data;
            } catch(error){
                console.error('Erro completo:', error);
                throw new Error('Erro na comunicação com o servidor');
            }
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        login: async (usuario: any) => {
            try {
                const response = await fetch('https://api-medilembrete-production.up.railway.app/usuario/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(usuario),
                });

                const data = await response.json();

                if (!response.ok) {
                    // Mostra o erro completo do backend se disponível
                    throw new Error(data.message || `Erro ${response.status}: ${response.statusText}`);
                }

                return data;
            } catch (error) {
                console.error('Erro completo:', error);
                throw new Error('Erro na comunicação com o servidor');
            }
        }
    }
    ,
    medicamentos: {
        getAllByUser: async (userId: number) => {
            try {
                const response = await fetch(`https://api-medilembrete-production.up.railway.app/medicamento/${userId}`, {
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
            } catch (error) {
                console.error('Erro completo:', error);
                throw new Error('Erro na comunicação com o servidor');
            }
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        create: async (medicamento: any) => {
            try {
                const response = await fetch('https://api-medilembrete-production.up.railway.app/medicamento', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(medicamento),
                });

                const data = await response.json();

                if (!response.ok) {
                    // Mostra o erro completo do backend se disponível
                    throw new Error(data.message || `Erro ${response.status}: ${response.statusText}`);
                }

                return data;
            } catch (error) {
                console.error('Erro completo:', error);
                throw new Error('Erro na comunicação com o servidor');
            }
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        update: async (id: number, medicamento: any) => {
            try {
                const response = await fetch(`https://api-medilembrete-production.up.railway.app/medicamento/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(medicamento),
                });

                const data = await response.json();

                if (!response.ok) {
                    // Mostra o erro completo do backend se disponível
                    throw new Error(data.message || `Erro ${response.status}: ${response.statusText}`);
                }

                return data;

            } catch (error) {
                console.error('Erro completo:', error);
                throw new Error('Erro na comunicação com o servidor');
            }
        },
        delete: async (id: number) => {
            try {
                const response = await fetch(`https://api-medilembrete-production.up.railway.app/medicamento/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();

                if (!data) {
                    throw new Error('Erro ao deletar medicamento');
                }

                return data;
            } catch (error) {
                console.error('Erro completo:', error);
                throw new Error('Erro na comunicação com o servidor');
            }
        }
    }
};
