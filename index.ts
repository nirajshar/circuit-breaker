import { Request, Response } from 'express';

const express = require('express');
const app = express();
const PORT = 3000;

app.get( '/' , (req: Request, res: Response) => {

    if( Math.random() > 0.8 ) {
        res.status(200).send({msg: 'Success'});
    } else {
        res.status(400).send({msg: 'Failure'});
    }

});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));