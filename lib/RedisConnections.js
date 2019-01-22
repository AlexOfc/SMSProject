/**
 * Created by Kirti Dabhi on 26-oct-2018.
 */
var Redis       = require('ioredis');
class RedisConnections{
    constructor(data){
        this.process    = data.process;
        this.ip         = data.ip;
        this.port       = data.port;
        this.registerPubSubConnections(data.connections);
    }

    registerPubSubConnections(connections){
        try{
            for(let i = 0; i < connections.length; i++){
                this[connections[i]] = new Redis({ host : this.ip, port: this.port});
                this[connections[i]].on("error", (err) =>{
                    console.log(`Error While Connecting to redis server, process : ${this.process} --Connections name : ${this[connections[i]]}, err : ${err}`);
                });

                this[connections[i]].on("connect", function() {
                    console.log("Successfully connected to redis server");
                });
            }
        }catch (err){
            console.log(err.stack);
        }
    }
}
module.exports = RedisConnections;