require('dotenv').config({path:'.env'})

import app from './app'

import './db'

async function main(){
  await app.listen(app.get('port'))
  console.log('Server Startup port', app.get('port'))
} 

main()