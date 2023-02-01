//import { useState } from "react";
import { themeContext } from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import Intro from "./Components/Intro/Intro";
import Accueil from "./Components/Accueil/Accueil.jsx";
//import Services from "./Components/Services/Services.jsx";
import Video from "./Components/videos/video";
//import Temoin from "./Components/temoignage/temoin";
import Slider from "./Components/slider/slider.jsx";
import Contact from "./Components/contact/contact";
import Services from "./Components/Services/Services.jsx";
import Pied from "./Components/pied/pied";
//import  TestiMonials from './Components/TestiMonials/TestiMonials';


export default App;
function App ()
 {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
   return <div className="App"
    style={{background:darkMode? 'black': '',
           color : darkMode? 'white': '', }}
   >
          
           <Intro/>
           <Accueil/>
           <Services/>
          {/* <Temoin/> */}
          <Video/>
          <Slider/>
          
          <Contact/>
          <Pied/>
          </div>
        
 }

