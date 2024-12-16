import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/car1.png'
import img2 from './images/car2.png'
import img3 from './images/car3.png'

function UncontrolledExample() {
  return (
    <>
    <br></br><br></br><br></br>
    <Carousel>
      <Carousel.Item>
        <img style={{margin : 'auto'}}
          width={1000} height={500}
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{margin : 'auto'}}
          width={1000} height={500}
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{margin : 'auto'}}
          width={1000} height={500}
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default UncontrolledExample;