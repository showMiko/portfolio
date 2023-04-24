const express=require('express');
const cors= require('cors');
const nodemailer=require('nodemailer');
const router=express.Router();


const app=express();
app.use(cors())
app.use(express.json());
app.use("/",router)
app.listen(5000,()=>console.log("Server Running on Port 5000"));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

const contactEmail= nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"soumik.samanta.20@aot.edu.in",
        pass:"9091539010Soumik123@"
    }
});

router.post("/contact",(req,res)=>{
    const name= req.body.firstName+req.body.lastName;
    const email= req.body.email;
    const message= req.body.message;
    const phone= req.body.phone;
    const mail= {
        from:name,
        to:"soumik.samanta.20@aot.edu.in",
        subject:"Contact Form Submission- PortFoilio",
        html: `
                <p>Name: ${name}</p>
                <p>email: ${email}</p>
                <p>Phone No: ${phone}</p>
                <p>Message: ${message}</p>
                `
    }

    contactEmail.sendMail(mail,(error)=>{
        if(error)
        {
            res.json(error);
        }
        else{
            res.json({code:200,status:"Message Sent"})
        }
    })

})
