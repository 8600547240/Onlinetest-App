var express = require('express');
var mongodb = require('mongodb');
var router = express.Router()

router.get('/get-que', async function(req, res, next){//receive the req
    //take the data from the req

    //connect with db
    try{
    var url="mongodb+srv://nit9am:nit9am@9am.7ivlfrl.mongodb.net/" 
    var mongoClient = mongodb.MongoClient;
    const server = await mongoClient.connect(url);
    const db = server.db('school');
    var collection = db.collection('questions');
    var result = await collection.aggregate([{ $sample: { size: 10 } }]).toArray()
    res.send(result); 
    }catch(e){
        console.log('Exception raised')
        console.log(e)
        res.send('Exception raise', e)
    }    
    //do required operations

    //prepare and send the res back to client
})

module.exports=router;