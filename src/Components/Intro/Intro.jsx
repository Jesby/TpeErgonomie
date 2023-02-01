import React from "react";
import './Into.css'
import { motion } from "framer-motion";
import {Link}  from  'react-scroll';

const Intro = () =>{
    return(
        <header> 
        <nav class="navbar">
             <div class="logo">
               <h2><span>L</span>ogo</h2>
             </div>
             <div class="nav">
                 <ul>
                 <motion.li
                      whileHover={{ scale: 1.2 }}
                      onHoverStart={e => {}}
                      onHoverEnd={e => {}}
                      color="white"
                     >Accueil</motion.li>
            
                    <Link spy={true} to='Services' smooth={true} duration={500} activeClass="activeClass">
                    <motion.li
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                    color="white"
                    >Services</motion.li>
                    </Link>
                    <Link spy={true} to='Slider' smooth={true} duration={500} activeClass="activeClass">
                     <motion.li
                     whileHover={{ scale: 1.2 }}
                     onHoverStart={e => {}}
                     onHoverEnd={e => {}}
                     >Temoignages</motion.li>
                     </Link>
                     <Link spy={true} to='Contact' smooth={true} duration={500} activeClass="activeClass">
                     <motion.li 
                     whileHover={{ scale: 1.2 }}
                     onHoverStart={e => {}}
                     onHoverEnd={e => {}}
                     color="white"
                     class="contact">Contact</motion.li>
                     </Link>
                 </ul>
             </div>
                <div class="loginf">
                        <form action=""> 
                            <input class="forme"   type="text"/>
                        </form>
                        <button class="Seach">Seach</button>
                </div>
        </nav>
    </header>
    )
}
export default Intro