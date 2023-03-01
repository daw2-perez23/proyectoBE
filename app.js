import dotenv from 'dotenv'
dotenv.config()

import Server from './models/server.cjs'; 


const server = new Server();

server.listen()
