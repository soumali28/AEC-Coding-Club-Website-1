var express = require("express");
var router = express.Router();
const {
  getlogs,
  branchdata,
  yeardata,
  alluser,
  eventsdata,
} = require("../controllers/alllogs");
const {
  isAuthenticated,
  isActivated,
  isAdmin,
} = require("../middlewares/verify");

router.get("/logger", isAuthenticated, isActivated, isAdmin, getlogs);
router.get("/branchdata", isAuthenticated, isActivated, isAdmin, branchdata);
router.get("/yeardata", isAuthenticated, isActivated, isAdmin, yeardata);
router.get("/alluser", isAuthenticated, isActivated, isAdmin, alluser);
router.get("/eventsdata", isAuthenticated, isActivated, isAdmin, eventsdata);

module.exports = router;
