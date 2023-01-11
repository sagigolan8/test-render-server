const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const getFoodRouter = require('./routers/getFood')

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', getFoodRouter);


app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));