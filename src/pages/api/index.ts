export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const { password } = req.body;
      let token = null;
      if (password === process.env.PASSWORD) {
        token = process.env.TOKEN;
      }
      res.json(token);
      break;
    default:
      break;
  }
}
