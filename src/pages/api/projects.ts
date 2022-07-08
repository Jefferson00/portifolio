import { ObjectID } from "mongodb";
import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let projectCreated = await db
        .collection("projects")
        .insertOne(bodyObject);
      res.json(projectCreated.ops[0]);
      break;
    case "PUT":
      const objectId = new ObjectID(req.body._id);
      const bodyCopy = (({ _id, ...rest }) => rest)(req.body);
      let projectUpdated = await db
        .collection("projects")
        .updateOne({ _id: objectId }, { $set: bodyCopy });
      res.json(projectUpdated);
      break;

    default:
      break;
  }
}
