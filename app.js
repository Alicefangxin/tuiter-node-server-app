import express from 'express';
import cors from 'cors';
const app = express()
import helloController
    from "./controllers/hello-controller.js";
import userController
    from "./controllers/users/users-controller.js"
import tuitsController
    from "./controllers/tuits/tuits-controller.js";
helloController(app);
userController(app);
tuitsController(app);
app.use(cors())
app.use(express.json())
app.listen(process.env.PORT || 4000);