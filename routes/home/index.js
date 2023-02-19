"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")


router.get("/", ctrl.hello);
 
router.get("/login", ctrl.login);

 module.exports = router; //내보내기 해주는 명령

 
