import * as  express from "express";

export const app = express();

app.use((req, res, next) => {
    res.status(200).send({message: 'it Works'});
});

