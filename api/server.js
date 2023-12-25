import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';





// init express

const app = express();
dotenv.config();

// envronment variable
const PORT = process.env.PORT || 9090;




// listen server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.red.bold);
})

