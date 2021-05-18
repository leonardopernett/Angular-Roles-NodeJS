import {createConnection} from 'typeorm'
import { User } from './entity/User'

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "roles",
    entities:[User],
    synchronize:true
}).then(()=>console.log('db is connected'))
.catch(err=>console.log(err))