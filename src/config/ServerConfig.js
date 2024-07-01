const dotenv  = require('dotenv');
dotenv.config();
module.exports={
    // PORT: process.env.PORT  (bcz it was saying server started at undefined)
    PORT: 3000
}