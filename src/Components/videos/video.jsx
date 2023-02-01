import React from 'react'
import './video.css'

//import bgvideo from '../../fonts/video/video.mp4'
import {motion} from "framer-motion";
const Video = () => {
  const transition = {duration : 2, type : 'spring'}
    return (
     
      <div className="video">
        <div className='gradiant'></div>
         
        <div class="contain">
        {/* <video autoPlay muted >
          //      <source src={bgvideo} type="video/mp4" />
          </video> */}
          <motion.div
           initial={{left: '-10%'}}
                whileInView={{left: '30%'}}
                transition={transition}
                style={{top: '70%', left:'-60%'}}
             >
         <div className="text-wrap">
            <h2>Etes vous fermier? Alors qu'attendez vous pour vous procurrer un kit... <br /></h2>
            <h4>
             Bénéfissiez d'une formation sur l'utilisation du kit après l'achat.
            </h4>
            <a href="" className='btn btn-warning'>Commandez dès maintenant</a>
        </div>
        </motion.div>   
       </div>
      </div>
    
    )
}

export default Video