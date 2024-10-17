const jwt = require("jsonwebtoken");
const { catchAsyncError } = require("../middlewares/catchAsyncErrors");
const errorHandler = require("../utils/ErrorHandler");

exports.isAuthenticated = catchAsyncError(async (req,res,next) => {
    const { token } = req.cookies;
    if(!token){
        return next(new errorHandler("please login to access the resource",401 ))
    }

    const {id} = jwt.verify(token, process.env.JWT_SECRET);
    req.id = id;
    next();

})