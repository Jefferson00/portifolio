export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const { password } = req.body;
      let token = null;
      if (password === process.env.NEXT_PUBLIC_PASSWORD) {
        token = process.env.NEXT_PUBLIC_TOKEN;
      }
      res.json(token);
      break;
    default:
      break;
  }
}
