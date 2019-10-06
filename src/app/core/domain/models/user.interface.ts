export interface IUser {
    id: number;
    username: string;
    password: string;
    discordId?: string;
    image?: string;
    userTimestamp: string;
    role: string;
    updatedAt?: Date;
    createdAt: Date;
}
