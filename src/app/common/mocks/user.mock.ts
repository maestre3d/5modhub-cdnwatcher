import { IUser } from 'src/app/core/domain/models/user.interface';

const userDB: readonly (readonly [string, IUser])[] = [
    ['root', {
        id: 1,
        username: 'root',
        password: 'caca123$',
        role: 'ROLE_SUPER',
        userTimestamp: '',
        createdAt: new Date()
    }],
    ['maestre', {
        id: 2,
        username: 'maestre',
        password: 'caca123',
        role: 'ROLE_ADMIN',
        userTimestamp: '',
        createdAt: new Date()
    }],
    ['drmike', {
        id: 3,
        username: 'drmike',
        password: 'thebest$',
        role: 'ROLE_USER',
        userTimestamp: '',
        createdAt: new Date()
    }],
    ['slick', {
        id: 4,
        username: 'slick',
        password: 'savagecoder#',
        role: 'ROLE_USER',
        userTimestamp: '',
        createdAt: new Date()
    }]
];
export const USERS: Map<string, IUser> = new Map<string, IUser>(userDB);
