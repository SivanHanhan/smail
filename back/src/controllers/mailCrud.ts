import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, getDocs} from "firebase/firestore";
import config from "../config/firebase.config";
import { pick } from "lodash";
import express, { Router, Request, Response } from "express";
const router: Router = express.Router();

const app = initializeApp(config.firebaseConfig);
const db = getFirestore(app);
const mailRef = collection(db, "mails");

// Add new mail
router.post("/", async (req: Request, res: Response) => {
  try {
    const mail = pick(req.body, ["sender", "reciever", "data", "description", "date"]);
    const docRef = await addDoc(mailRef, mail);
    console.log("Document written with ID: ", docRef.id);
    return res.send("New mail added to firebase DB.");
  } catch (e: any) {
    return res.status(400).send(e.message);
  }
});

// get all mails
router.get("/", async (req: Request, res: Response) => {
  try {
    const docRef = await getDocs(mailRef);
    const allMails = docRef.docs.map(doc => doc.data());

    return res.send(allMails);
  } catch (e: any) {
    return res.status(400).send(e.message);
  }
});

export default router;
