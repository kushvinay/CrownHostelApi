require('dotenv').config({path: './.env'});
const express = require("express");
const app = express();

//Database connection
require("./models/db").connectDatabase();

//cors
const cors = require("cors");
app.use(cors({ credentials: true, origin: true }));

//logger
 const logger = require("morgan");
 app.use(logger("tiny"));

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//session and cookie

const session = require("express-session");
const cookieparser = require("cookie-parser");
app.use(session({
      resave: true,
      saveUninitialized: true,
      secret: process.env.EXPRESS_SESSION_SECRET
}));

app.use(cookieparser());

// express fileupload
const fileupload = require("express-fileupload");
app.use(fileupload());

 //routes
 app.use("/user", require("./routes/userRoutes"));
 app.use("/roomInquiry", require("./routes/roomInquiryRoutes"));
 app.use("/accommodation", require("./routes/accommodationRoutes"));
 app.use("/cleaning", require("./routes/cleaningRoutes"));
 app.use("/clearance", require("./routes/clearanceRoutes"));
 app.use("/mentoring", require("./routes/mentoringRoutes"));
 app.use("/leave", require("./routes/leaveRoutes"));
 app.use("/medical", require("./routes/medicalRoutes"));


 //error handling
 const ErrorHandler = require('./utils/ErrorHandler');
 const { generatedErrors } = require("./middlewares/errors");
 
app.all("*", (req, res, next) =>{

      next(new ErrorHandler(`Requested URL not found ${req.url}`, 404));

});

app.use(generatedErrors);

app.listen(process.env.PORT,
console.log(`server running on port ${process.env.PORT}`)
);
