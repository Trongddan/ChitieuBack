import path from 'path';
import multer from 'multer';
var storage = multer.diskStorage({
  // destination: (req, file, cb) => {
  //   cb(null, "src/upload/");
  // },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    cb(null, path.basename(file.originalname) + Date.now() + ext);
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    console.log(file.mimetype);
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg' ||
      file.mimetype == 'video/mp4'
    ) {
      callback(null, true);
    } else {
      console.log('only jpg or png');
      callback(null, false);
    }
  },
});
export default upload;
