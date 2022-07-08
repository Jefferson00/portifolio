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
      let bodyObj = JSON.parse(req.body);
      let projectUpdated = await db
        .collection("projects")
        .updateOne({ id: req.body.id }, bodyObj);
      res.json(projectUpdated);
      break;

    default:
      break;
  }
}
