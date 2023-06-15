const express =require('express');
const router = express.Router('../');
const userController =require('../controllers/users.controller');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: './src/uploads/images',
    filename: (req,file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)

    }
})

const upload = multer({ storage: storage });


router
    .get('/',userController.get)
    .get('/:id',userController.getById)
    .post('/',upload.single('image'),userController.create)
    .put('/:id',userController.update)
    .delete('/:id',userController._delete);

module.exports = router;