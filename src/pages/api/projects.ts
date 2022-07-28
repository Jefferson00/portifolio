import { ObjectID } from "mongodb";
import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  switch (req.method) {
    case "POST":
      let projectCreated = await db.collection("projects").insertOne(req.body);
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
    case "DELETE":
      const deleteId = new ObjectID(req.query._id);
      await db.collection("projects").deleteOne({ _id: deleteId });
      res.json(deleteId);
      break;

    default:
      break;
  }
}
