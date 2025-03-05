// export enum customerType {
//     REGULAR = "REGULAR",
//     GOLD = "GOLD",
//     PLATINUM = "PLATINUM"
// }

export enum customerType {
    REGULAR,
    GOLD,
    PLATINUM
}

export type Customer = {
    id: number;
    name: string;
    type: customerType;
}
