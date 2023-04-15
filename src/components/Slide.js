import Carousel from "react-bootstrap/Carousel";
function Slide() {
  return (
    <div>
      <div>
        <Carousel className="slide">
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="./img/capa.png"
              alt="First slide"
              height="550"
            />
          </Carousel.Item >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/image1.png"
              alt="Second slide"
              height="550"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/Hotel_Tulipa.gif"
              alt="Third slide"
              height="550"
            />
          </Carousel.Item>
        </Carousel>
      </div> {/* fim do slide */}
    </div>
  );
}
export default Slide;
