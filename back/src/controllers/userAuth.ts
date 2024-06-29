import { initializeApp } from "firebase/app";
import config from "../config/firebase.config";
import express, { Router, Request, Response } from "express";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const router: Router = express.Router();

const app = initializeApp(config.firebaseConfig);
const auth = getAuth();

router.post("/signUp", async (req: Request, res: Response) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, req.body.email, req.body.password);
    console.log("User signed up, user: ", userCredential.user);
    res.send(userCredential.user);
  } catch (e: any) {
    console.log(e);
    return res.status(400).send(e.message);
  }
});

router.get("/logIn", async (req: Request, res: Response) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, req.body.email, req.body.password);
    // const users = awaut auth().listUsers();
    console.log("User logged in, user: ", userCredential.user);
    res.send(userCredential.user);
  } catch (e: any) {
    console.log(e);
    return res.status(400).send(e.message);
  }
});

export default router;
