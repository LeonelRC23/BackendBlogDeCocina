import jwt from 'jsonwebtoken';

export const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.log(error);
  }
};

export const tokenSign = async (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET
  );
};

export const decodeSing = (token) => {
  return jwt.decode(token, null);
};
