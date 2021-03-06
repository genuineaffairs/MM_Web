import {
  sign,
  verify
} from 'jsonwebtoken';

const generateToken = (id, username) => {
  const token = {};
  token.accessToken = sign({
    exp: Math.floor(Date.now() / 1000 + (60 * 60)),
    id,
    username
  }, process.env.TOKEN_SECRET);
  return token;
};

const verifyUserWithJWT = (req, res, next) => {
  try {
    verify(req.headers.authorization.slice(7), process.env.TOKEN_SECRET);
    success('token verified');
    next();
  } catch (e) {
    error('token not verified');
    next(e);
  }
};


module.exports.generateToken = generateToken;
module.exports.verifyUserWithJWT = verifyUserWithJWT;