import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import './contact.css'
import travail from '../../fonts/ing/linkedin.png'
import Fiverr from '../../fonts/ing/instagram.png'
import Amazon from '../../fonts/ing/lapoule.png'
import Shopify from '../../fonts/ing/icons8_whatsapp_60px.png'
import Facebook from '../../fonts/ing/icons8_facebook_48px.png'

const Contact = () =>
{
        const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_yo7mack', form.current, 'Vsh31XG9LhZOWYqSE')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
     return (
        <div className="contact-form" id="Contact">
            <div className="travail">
                <div className="brillant">
                <div className="w-right" style={{left:'-100px'}}>
             <motion.div
              initial= {{rotate: 45}}
              whileInView= {{rotate : 0}}
              viewport = {{margin: '-40px'}}
              transition= {{duration: 3.5, type: 'spring'}}
              className="w-mainCircle">
                  <div className="w-secCircle">
                     <img src={travail} alt="" />
                  </div>
                  <div className="w-secCircle">
                     <img src={Fiverr} alt="" />
                  </div>
                  <div className="w-secCircle">
                     <img src={Amazon} alt="" />
                  </div>
                  <div className="w-secCircle">
                     <img src={Shopify} alt="" />
                  </div>
                  <div className="w-secCircle">
                     <img src={Facebook} alt="" />
                  </div>
             </motion.div>
             {/* Background cercle */}
             <div className="w-backCircle blueCerle" ></div>
             <div className="w-backCircle yelowCercle"></div>
           </div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                      <h1>Contactez-nous</h1>
                     <input type="text" name="user-name" className="user" placeholder="Name"/>
                     <input type="email" name="user-email" className="user" placeholder="Email"/>
                     <textarea name="message" className="user" placeholder="Message"></textarea>
                     <input type="submit" value="Send" className="button"/>
                     <span>{done && "Merci de m'avoir contacte"}</span>
                </form>
            </div>
            
        </div>
       
        
     )
} 
export default Contact;