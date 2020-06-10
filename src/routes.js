import { Router } from "express";

import Usercontroller from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

import authMiddleware from "./app/middleware/auth";

const routes = new Router();

routes.post("/users", Usercontroller.store);

routes.post("/sessions", SessionController.store);
//middleware global
routes.use(authMiddleware); //this middleware is exec after routes top

routes.get("/", async (req, res) => {
  // console.log('HelloWorld');

  return res.status(200).json({ sucess: "HelloWorld" });
});

module.exports = routes;
