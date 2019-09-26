export interface IUser {
    id: number;
    username: string;
    password: string;
    discordId?: string;
    userTimestamp: string;
    role: string;
    updatedAt?: Date;
    createdAt: Date;
}
