import {Client, Account, Databases, Storage, Avatars } from 'appwrite'


export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6543ec85e1d5012b85dc'); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

export { ID } from 'appwrite';
