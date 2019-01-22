/**
 * Created by Kirti Dabhi on 11-June-2018.
 */
var mongoClient = require('mongodb').MongoClient;

/*
* @{
* @url : mongo connection url,
* @collections : ['<collection name to connect>']
* }*/
class MongoConnections{
    constructor(data){
        this.url = data.url;
        this.collections = data.collections || [];
    }

    connectToDB(callback){
        mongoClient.connect(this.url, (err, db) => {
            try{
                console.log(`At C:MongoConnections, M:connectToMongo - err : ${err}, db : ${db}`);
                if(db){
                    this.db = db;
                    this.connectToCollections(callback);
                }else {
                    callback(err);
                }
            }catch (err){
                console.log(err.stack);
            }
        });
    }
    connectToCollections(callback){
        try{
            var collectionsCount = this.collections.length;
            for(let i = 0; i < collectionsCount; i++){
                this.db.collection(this.collections[i], (err, collection) => {
                    try{
                        console.log(`At C:MongoConnections, M:connectToCollections - collection : ${this.collections[i]} err : ${err}`);
                        if(collection){
                            this[this.collections[i]] = collection;
                        }
                       
                        if(i == (collectionsCount-1)){
                            callback('Connected to mongo DB');
                        }
                    }catch (err){
                        console.log(err.stack);
                    }
                });
            }
        }catch (err){
            console.log(err.stack);
        }
    }
}
module.exports = MongoConnections;