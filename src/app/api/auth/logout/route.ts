import { NextApiRequest, NextApiResponse } from "next";

const logout = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Set-Cookie", "token=; Path=/; Max-Age=0");
  res.status(200).json({ message: "Logged out successfully" });
};

export default logout;
