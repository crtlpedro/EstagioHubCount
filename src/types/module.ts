//import type { modules } from "../utils/modules";

export interface Module {
    id: number;
    title: string;
    section: 'Automação' | 'Relatórios';
    status: 'ativo' | 'manutencao';
    description: string;
    image?: string;
    classe?: string;
}
