const express = require('express');
const router = express.Router();
const multer = require('multer');
const storyController = require('../Controllers/story');

const app=express();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

router.post('/story',upload.single("files"), storyController.postStory);
router.get('/story/:user',storyController.getStory);

module.exports = router;


