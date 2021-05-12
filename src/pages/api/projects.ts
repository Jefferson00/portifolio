import {VercelRequest, VercelResponse} from '@vercel/node';
import {MongoClient, Db} from 'mongodb';

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
    if(cachedDb){
        return cachedDb;
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })

    const db = client.db('portifolio');

    cachedDb = db

    return db;
}


export default async (request: VercelRequest, response: VercelResponse) => {
   const {slug} = request.query
   
   const db = await connectToDatabase(process.env.MONGODB_URI);

   const collection = db.collection('projects');

   let projects = []

   if(slug){
        const result = await collection.findOne({id:slug})
        projects = result
   }else{
       const result = collection.find({})
       await result.forEach(res =>{
        projects.push(res)
      })
   }

   return response.status(201).json(projects);
}