
export default function handler(req, res) {
  // This code
  const secrets = process.env;
  res.status(200).json(secrets);
}
