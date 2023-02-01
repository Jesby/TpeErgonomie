import React from "react";
import "./Services.css"
import "@fontsource/roboto";
import { motion } from "framer-motion";
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import  { useState } from 'react';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import CardGroup from 'react-bootstrap/CardGroup';
import Poule1  from '../../fonts/ing/incubateur1.jpg'; 
import Poule2  from '../../fonts/ing/incubateur2.jpg'; 
import Poule3  from '../../fonts/ing/salle1.jpg'; 
import Poule4  from '../../fonts/ing/Aliment1.jpg'; 
import Poule5  from '../../fonts/ing/applimob.jpg';
const Services = () => {
    const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);
      
    return(
        <div className="services" id="Services">
                 <div class="titre"> <span  style={{color:"#fb982f", fontSize:"2.5rem"}} >Nos  </span> <span style={{color:"#111111", fontSize:"2.5rem", right:"200px"}}> Services</span></div>
            <div class="cards">
            <CardGroup className="group">
            <Card className="gcard">
                <Card.Img variant="top" class="photo"  src={Poule1} />
                <Card.Body class="bodycards">
                <Card.Title className="titlecard">Un incubateur</Card.Title>
              
                <Card.Text class="letext">
                       <>
               
            <div style={{cursor:'pointer'}} onClick={toggleShow}>voir plus...</div>
                <MDBCollapse show={showShow}>
                Pour le suivi de vos oeufs. vous pouvez ainsi controller les facteurs permettant la bonne marche du processus d'éclosion de vos oeufs (température, humidité, rotation des oeufs).

                </MDBCollapse>
                </>
                   
                </Card.Text>
                </Card.Body>
               
            </Card>
            
            <Card className="gcard">
                <Card.Img variant="top" class="photo" src={Poule2} />
                <Card.Body class="bodycards">
                <Card.Title className="titlecard">Un système automatique relié à l'incubateur</Card.Title>
                <Card.Text class="letext">
                <MDBCollapse show={showShow}>
                    Vous pouvez rendre votre incubateur automatique avec ce système pour controller des paramètres telque la rotation après un certain  temps défini au préalable.
                    </MDBCollapse>
                   
                </Card.Text>
                </Card.Body>
                
            </Card>
            <Card className="gcard">
                <Card.Img variant="top" class="photo" src={Poule3} />
                <Card.Body class="bodycards">
                <Card.Title className="titlecard">Une salle de chauffage</Card.Title>
                <Card.Text class="letext">
                <MDBCollapse show={showShow}>
                    Après que les poussins aient éclos il faut bien qu'ils puissent grandir. C'est pour quoi,nous mettons à votre disposition une salle de chauffage pour la bonne croissance et la sécurité de vos poussins.
                    </MDBCollapse>
                 
                </Card.Text>
                </Card.Body>
                
            </Card>
            <Card className="gcard">
                <Card.Img variant="top" class="photo" src={Poule4} />
                <Card.Body class="bodycards">
                <Card.Title className="titlecard">un système d'alimentation et de soins automatique</Card.Title>
                <Card.Text class="letext">
                <MDBCollapse show={showShow}>
                Vous pouvez éventuellement rendre votre salle de chauffage automatique en y ajoutant ce système qui vous permettra de nourrir vos poussins et les soigner selon une période de temps définie.
                </MDBCollapse> 
                    
                </Card.Text>
                </Card.Body>
               
            </Card>
            <Card className="gcard">
                <Card.Img variant="top" class="photo" src={Poule5} />
                <Card.Body class="bodycards">
                <Card.Title className="titlecard">Une application mobile</Card.Title>
                <Card.Text class="letext">
                <MDBCollapse show={showShow}>
                    Vous pouvez ainsi suivre votre ferme à distance (incubateur et salle de chauffage ) sur votre smartphone ou iphone autrement dit vérifier les paramètres, changer les périodes de temps définis et bien d'autres encore.
                    </MDBCollapse>
                </Card.Text>
                </Card.Body>
                
            </Card>
            </CardGroup>
            </div>
            <div class="slider">
                  
            </div>
        </div>
    )
}

export default Services