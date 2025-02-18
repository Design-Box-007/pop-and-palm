import React from 'react'
import ContactImage from "../assets/ContactImage.png";
import ContactDesignLeft from "../assets/ContactDesignLeft.png";
import LeftToRightReveal from './LeftToRightReveal';
import VisibleReveal from './VisibleReveal';



const ContactSection = () => {
    return (
        <div className='contact-section'>
            <div className='contact-design-left'>
                <img src={ContactDesignLeft} alt="ContactImage" />
            </div>
            <LeftToRightReveal>
                <div className='d-flex align-items-center'>
                    <h1 className='title '>Get In Touch </h1>&nbsp;&nbsp; <div className='subtitle mt-5'> Expecting your calls</div>
                </div>
            </LeftToRightReveal>
            <VisibleReveal>
                <div className='contact-container'>
                    <div className='row'>
                        <div className='col-md-6 my-4'>
                            <img src={ContactImage} alt="ContactImage" width="100%" height="100%" style={{ objectFit: "cover", borderRadius: "20px" }} />
                        </div>
                        <div className='col-md-6 my-4 d-flex flex-column gap-2'>
                            <div className='contact-title'>Reach out to our team</div>
                            <div className='contact-subtitle'>Get in touch with us to bring your event vision to life! Whether you have specific decor ideas or need expert guidance, we're here to help create unforgettable experiences. Please fill out the form with your details, and we'll reach out to discuss your event needs. Let’s make your celebration extraordinary!</div>
                            <form className='mt-3'>
                                {/* <div className='row'>
                                <div className='col-md-6 d-flex flex-column mb-3'>
                                    <label className='contact-label'>First Name</label>
                                    <input type='text' className='contact-input' placeholder='First Name'/>
                                </div>
                                <div className='col-md-6 d-flex flex-column mb-3'>
                                    <label className='contact-label'>Last Name</label>
                                    <input type='text' className='contact-input' placeholder='Last Name'/>
                                </div><div className='col-md-6 d-flex flex-column mb-3'>
                                    <label className='contact-label'>Email</label>
                                    <input type='email' className='contact-input' placeholder='Email'/>
                                </div><div className='col-md-6 d-flex flex-column mb-3'>
                                    <label className='contact-label'>Contact</label>
                                    <input type='text' className='contact-input' placeholder='Contact'/>
                                </div> 

                                <div className='col-md-12 d-flex flex-column mb-3'>
                                    <label className='contact-label'>Description</label>
                                    <textarea rows={4} type='text' className='contact-input' placeholder='Contact'/>
                                </div> 
                                <div className='col-md-12 d-flex flex-column mb-3'>
                                    <button className='button-primary'>SUBMIT INFORMATION &rarr;</button>
                                    </div>  
                            </div> */}
                                <a href='https://us.bigin.online/org868107012/forms/enquiry-form' target='_blank' rel="noopener noreferrer">
                                    <button type='button' className='button-primary'>Let's Discuss Your Ideas &rarr;</button>
                                </a>
                            </form>
                        </div>

                    </div>

                </div>
            </VisibleReveal>
        </div>
    )
}

export default ContactSection