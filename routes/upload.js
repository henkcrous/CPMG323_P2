var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({dest:'uploads/'});

//router.get("/", (req, res) => {
//    res.sendFile(path.join(__dirname + "/data.pug"));
//});

router.post("/uploadFile",  upload.single("myFile"), (req, res, next) => { 
    const file = req.file;
  
    if (!file) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }
    const multerText = Buffer.from(file.buffer).toString("utf-8");
  
    const result = {
      fileText: multerText,
    };
    //res.redirect('/edit');
    res.send(result);
  }); 

module.exports = router;