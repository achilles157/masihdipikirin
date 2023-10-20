import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Carousel.Item interval={500}>
        <img
          src={require("./images/image1.png")}
          alt="First Slide"
          style={{ width: '100%', height: '300px' }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          src={require("./images/image2.png")}
          alt="Second Slide"
          style={{ width: '100%', height: '300px' }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("./images/image3.png")}
          alt="Third Slide"
          style={{ width: '100%', height: '300px' }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
