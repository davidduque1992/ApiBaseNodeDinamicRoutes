const checkJWT = (req, res, next) => {
  const headerAuth = req.headers.authorization || "";
  const token = headerAuth.split(" ").pop();
  if (!token) {
    res.status(405);
    res.send({ error: "no tienes autorización" });
  } else {
    next();
  }
};
module.exports = { checkJWT };
