export interface DocumentData {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface User extends DocumentData {
    name: string;
    email: string;
    age?: number;
}