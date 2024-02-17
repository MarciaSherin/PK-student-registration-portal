const express = require('express');;
const router = express.Router(); 
const con=require("../db");


router.post("/basic",async(req,res)=>{
    const {blood_grp,course,dagree,dob,gender,hsc_medium,name,studentmob_no,student_aadhar,student_email,yearofadmission}=req.body;
    const sql="INSERT INTO student_details(blood_grp,course,dagree,dob,gender,hsc_medium,name,studentmob_no,student_aadhar,student_email,yearofadmission) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    const values=[blood_grp,course,dagree,dob,gender,hsc_medium,name,studentmob_no,student_aadhar,student_email,yearofadmission];
    const result=await con.query(sql,values);
    res.status(200).json({
        message:"Student details added successfully",
        body:req.body
    })
})

router.
module.exports=router;



