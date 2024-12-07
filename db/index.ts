import pkg from "pg";

const userDb = process.env.DB_USER as unknown as string;
const hostDb = process.env.DB_HOST as unknown as string;
const databaseDb = process.env.DB_DATABASE as unknown as string;
const passwordDb = process.env.DB_PASSWORD as unknown as string;
const portDb = process.env.DB_PORT as unknown as number;

const { Client } = pkg;
const client = new Client({
  user: userDb,
  host: hostDb,
  database: databaseDb,
  password: passwordDb,
  port: portDb,
});

client.connect();

export default client;
