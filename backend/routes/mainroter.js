const express = require('express');;
const router = express.Router(); 
const pool=require("../db");    


router.post("/basic",async(req,res,next)=>{
    
    try{const {blood_grp,course,dagree,dob,gender,hsc_medium,name,studentmob_no,student_aadhar,student_email,yearofadmission}=req.body;
    const sql="INSERT INTO basic(blood_grp,course,degree,dob,gender,hsc_medium,name,studentmob_no,student_aadhar,student_email,yearofadmission) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    const values=[blood_grp,course,dagree,dob,gender,hsc_medium,name,studentmob_no,student_aadhar,student_email,yearofadmission];
    const result=await pool.query(sql,values);
    res.status(200).json({
        message:"Student details added successfully"
    })}
    catch(err){
        console.log("error adding student details",err);
        res.status(500).json({
            msg:"Error adding student details",
        })
    }
})



module.exports=router;



