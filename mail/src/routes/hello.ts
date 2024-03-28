import { Router } from "express";

const router = Router();

router.get("/greet", (req, res, next) => {
  try {
    //send an object to firebase
    return res.status(200).json({ message: "Hello World" });
  } catch (e) {
    next(e);
  }
});

export default router;
