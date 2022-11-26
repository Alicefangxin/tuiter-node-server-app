import express from 'express';
import cors from 'cors';
import helloController
    from "./controllers/hello-controller.js";
import userController
    from "./controllers/users/users-controller.js"
import tuitsController
    from "./controllers/tuits/tuits-controller.js";

import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://tuiterdeveloper:superpassword@tuiter.u4bstng.mongodb.net/tuiter?retryWrites=true&w=majority')

const app = express()
app.use(cors())
app.use(express.json())

helloController(app);
userController(app);
tuitsController(app);

app.listen(process.env.PORT || 4000);