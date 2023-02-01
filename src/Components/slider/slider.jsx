import Carousel from 'react-bootstrap/Carousel';
import './slider.css'
import Profil from '../../fonts/ing/glasses.png'
const  Slider = () => {
  return (
      <div class="slider" id='Slider'>
          <div class="sliderg">
          <h2 class='texte'>Temoignage</h2>
          </div>
          <div class="sliderd">
          <Carousel className='d-flex'>
           
           <Carousel.Item class="carousel">
             <img
               class="image"
               src={Profil}
             
             />
             <Carousel.Caption class='text'>
               <h3 class="titre">Bayiha</h3>
               <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque recusandae doloribus molestias provident praesentium suscipit quidem ea, amet totam mollitia, asperiores, esse possimus laborum sit nam blanditiis aperiam libero obcaecati?</p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
             <img
               class="image"
               src={Profil}
               alt="Second slide"
             />
     
             <Carousel.Caption class='text'>
               <h3 class="titre">Suzie</h3>
               <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt porro deserunt consequatur. Nihil eaque numquam ipsum eligendi laboriosam necessitatibus expedita, doloribus fugiat, animi facere qui autem itaque odio quos?</p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
             <img
               class="image"
               src={Profil}
               alt="Third slide"
             />
     
             <Carousel.Caption class='text'>
               <h3 class="titre">Kuate</h3>
               <p class="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas natus nesciunt quidem suscipit fugiat veniam accusamus, esse ab pariatur delectus adipisci deleniti vitae quo fuga consectetur voluptatem. Sit, modi deleniti!
               </p>
             </Carousel.Caption>
           </Carousel.Item>
         </Carousel>
          </div>
          
    </div>
  );
}

export default Slider;