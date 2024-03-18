import express from "express";
import{
    getUser,
    getUserFriends,
    addRemovefriend,
}from "../controllers/users.js";
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();


/*Read Routes*/
router.get("/:id",verifyToken,getUser);
router.get("/:id/friends",verifyToken,getUserFriends);


/*Update*/
router.patch("/:id/friendId",verifyToken,addRemovefriend);



export default router;
