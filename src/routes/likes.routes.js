import { Router } from "express";
import {
  deleteLikeController,
  getLikesFromPostController,
  postLikeController,
} from "../controllers/likes.controller.js";
import { likesMiddleware } from "../middlewares/likes.middleware.js";
import { validateToken } from "../middlewares/validateToken.middleware.js";

const router = Router();

router.get("/likes/:postId", validateToken, getLikesFromPostController);
router.post(
  "/like/:postId",
  validateToken,
  likesMiddleware,
  postLikeController
);
router.delete(
  "/like/:postId",
  validateToken,
  likesMiddleware,
  deleteLikeController
);

export default router;
