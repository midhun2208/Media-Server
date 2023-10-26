//1 import json server
const jasonserver = require('json-server') 

//2 create a server for media appp
const mediaAppServer = jasonserver.create()

//3 set up path for the json file
const router = jasonserver.router('db.json')

//4 Return midlleware used by jsonserver
const middleware = jasonserver.defaults()

//5 set up port number
const port = process.env.port || 4000

//6 use middleware in the app 
mediaAppServer.use(middleware)
mediaAppServer.use(router)

//7 listen for resolving result
mediaAppServer.listen(port,() => {
    console.log('listening on port' +port);
})
