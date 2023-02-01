import React from "react";
import './Accueil.css'
import {motion} from "framer-motion";
import Crown from '../../fonts/ing/crown.png'
import Thumbup from '../../fonts/ing/thumbup.png'
import Lapoule from '../../fonts/ing/lapoule.png';

const Accueil = () => {
  const transition = {duration : 2, type : 'spring'}
    return(
        <div class="intro">
          <div class="nintro">
            <div class="blur"></div>
            <motion.div
            initial={{left: '-36%'}}
            whileInView={{left: '24%'}}
            transition={transition}
             class="img1" >
              <img src={Crown} alt=""/>
              <h4 style={{color:"black"}}>Produit de qualité</h4>
            </motion.div> 
            <div class="blur1"></div>
              <div class="img">
                    <img src={Lapoule} alt=""/>
              </div>  
              <motion.div
                initial={{left: '-10%'}}
                whileInView={{left: '60%'}}
                transition={transition}
                style={{top: '70%', left:'-60%'}}
               class="img2">
                <img src={Thumbup} alt=""/>
                <h4 style={{color:"black"}}>livrason rapide</h4>
              </motion.div> 
        </div>
        <div class="mintro">
           <div class="text">
            <div class="blur2"></div>
             <span  style={{color:"#fb982f", fontSize:"3rem", paddingTop:"50px"}} >Breeding </span> <span style={{color:"#111111", fontSize:"3rem", right:"200px"}}> Tech  </span>
            <h3 class={{with:"10px", top:"70px"}}>Votre ferme connectée <br />pour un élévage moderne <br /> et rentable </h3>
                
                  <motion.div
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                   class="login" style={{marginTop:"5rem", marginRight:"-4rem"}}>
                    <button>Commandez-maintenant </button>
                </motion.div>
                
            </div>
        </div> 
     </div>
    )
}

export default Accueil