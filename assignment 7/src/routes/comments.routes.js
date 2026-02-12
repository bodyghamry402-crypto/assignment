const {Router} = require("express")
const controller = require("../src/modules/controllers/comment.controller");
const { commentsRouter } = require("..");
const router = Router()

router.post("/", controller.bulkCreate);
router.post("/", );

router.patch("/:id", controller.updateComment);
router.post("/find", controller.find);
router.post("/create", controller.Create);
router.get("/search", controller.search);
router.get("/newest/:postId", controller.newest);
router.get("/details/:id", controller.getCommentDetails);


module.exports = {commentsRouter:router};