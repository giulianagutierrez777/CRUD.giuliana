const multer = require('multer');
const path = require('path');

const storageProductImage = multer.diskStorage({
    destination : function (req, file, cb){
        cb(null, 'public/images/products')
    },
    filename : function (req, file, cb){
        cb(null, `${Date.now()}_products_${path.extname(file.originalname)}`)
    }
});


const uploadProductImage = multer({
    storage : storageProductImage
});

module.exports = {
    uploadProductImage
}