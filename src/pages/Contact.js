import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <>
            <ContactForm />
            <div className="row align-items-center justify-content-center mt-5">
                <div className="col-3 col-md-2 text-center">
                    <a href='https://www.linkedin.com/in/xiao-zhao-94bb9571/' className="text-center"><img src='/images/linkedin.png' alt="linkedin" style={{width: '40px'}}></img></a>  
                </div>
                <div className="col-3 col-md-2 text-center">
                    <a href="https://github.com/xiaozhao1111"> <img src='/images/github.png' alt="github" style={{width: '40px'}}></img></a>
                </div>
                <div className="col-3 col-md-2 text-center">
                    <a href="mailto: zhaoxiao20071106@gmail.com"><img src='/images/email.png' alt="email" style={{width: '40px'}}></img></a>
                </div>
                <div className="col-3 col-md-2 text-center">
                    <a href="https://drive.google.com/file/d/1FNsEPRE1ymQvAUOWZhVIDms9tsp6vhLz/view?usp=share_link"><img src='/images/cv.png' alt="cv" style={{width: '40px'}}></img></a>
                </div>

            </div>
        </>
    )
}

export default Contact;