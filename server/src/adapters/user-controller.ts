import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

const userController = () => {
  const welcome = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({
      status: "success",
      message: "Welcome to the server",
      data: null,
    });
  });

  return {
    welcome,
  };
};

export default userController;
