import React from 'react';
import './temoin.css'
import { motion } from "framer-motion";
import Poule1  from '../../fonts/ing/poulet1.jpg'; 
import Poule2  from '../../fonts/ing/poule9.jpg'; 
import Poule3  from '../../fonts/ing/poule10.jpg'; 
import Poule4  from '../../fonts/ing/poule3.jpg'; 
import Poule5  from '../../fonts/ing/poule5.jpg'; 
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

 const Temoin = () => {
  return (
    <div class="temoin">
         <MDBRow className='row-cols-1 row-cols-md-3 g-4 mt-2'>
      <MDBCol>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
        <MDBCard className='w-100' style={{transform:"scale(0.6)"}}>
          <MDBCardImage

            src={Poule1}
            alt='...'
            position='top'
      
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter className='' style={{background:'#c29b5d', cursor:'pointer'}}>
            <small className='text-muted' style={{color:'white'}}>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
        </motion.div>

      </MDBCol>
      <MDBCol>
      <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
        <MDBCard className='w-100' style={{transform:"scale(0.8)"}}>
          <MDBCardImage
             src={Poule2}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This card has supporting text below as a natural lead-in to additional content.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter className='' style={{background:'#c29b5d'}}>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
        </motion.div>
      </MDBCol>
      <MDBCol>
      <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
        <MDBCard className='w-100' style={{transform:"scale(0.6)"}}>
          <MDBCardImage
            src={Poule4}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              card has even longer content than the first to show that equal height action.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter className='' style={{background:'#c29b5d'}}>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
        </motion.div>
      </MDBCol>
    </MDBRow>
                 <button>dkdfjspfj</button>
    </div>
    
  );
}


export default Temoin