export interface IOffer {
    id: number;
    title: string;
    price: number;
    quantity: number;
    type: "Account" | "Elojob" | "Guides" | "Gift Card";
    category: "Jogos" | "Outros";
    description: string;
}