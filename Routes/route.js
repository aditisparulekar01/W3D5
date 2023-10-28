const express=require("express");
const router=express.Router();
const StudentController=require("../Controllers/studentController.js");
const CourseControler=require("../Controllers/courseController.js");
router.post("/register",StudentController.createStudent);
router.post("/course",CourseControler.createCourse);
module.exports=router;
