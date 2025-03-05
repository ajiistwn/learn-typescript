export interface Seller {
    id: number;
    name: string;
    address?: string;
    readonly phone: string;
    readonly email: string;
}