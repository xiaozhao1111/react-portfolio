import React from "react";

function ContactForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        
    }
    return(
        <div className="mt-5 text-white">
        <h1 className="text-center">Contact Me</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Enter Your Name" />
            <input type='text' placeholder="Enter Your Email Address" />
            <textarea type='text' placeholder="Enter Your Message..." col='30' rows='10'></textarea> 
            <button>Submit</button>
        </form>
        </div>
    )
}

export default ContactForm;