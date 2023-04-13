import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

function Feature() {
  return (
    <>
      <div className="container-fluid">
        <h2 className="titulos">Espaço Social</h2>
        <div class="row featurette">
          <div className="col-md-6">
            <h2 className="featurette-heading">Nosso Espaço.</h2>
            <p className="lead">
              Temos um espaço amplo no estabelecimento, para garantir seu
              conforto e bem estar.
            </p>
            <ul className="lead list-style-none">
              <li>Sala de espera.</li>
              <li>Quartos para casal.</li>
              <li>Quartos para solteiro.</li>
              <li>Não temos estacionamento próprio.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <Carousel>
              <Carousel.Item interval={2000}>
                <img
                  className="slide-social w-100"
                  src="./img/capa1.jpg"
                  alt="First foto"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/espaco_07.png"
                  alt="Second foto"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/espaco_08.png"
                  alt="Third slide"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/espaco_05.png"
                  alt="Third slide"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/espaco_09.png"
                  alt="Third slide"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/espaco_03.png"
                  alt="Third slide"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/espaco_11.png"
                  alt="Third slide"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/espaco_06.png"
                  alt="Third slide"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/espaco_04.png"
                  alt="Third slide"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/espaco_02.png"
                  alt="Third slide"
                  height="497"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      {/* fim da primeira feature */}
      <div className="container-fluid">
        <h2 className="titulos">Como Trabalhamos?</h2>
        <div class="row featurette">
          <div className="col-md-6">
            <h2 className="featurette-heading">Aberto 24 horas.</h2>
            <p className="lead">
              Funcionamos 24 horas para te atender em todos os momentos. Ligue e
              faça sua reserva pelo telefone, ou entre em contato pelo WhatsApp.
            </p>
            <ul className="lead list-style-none">
              <li>Pernoites para casal.</li>
              <li>Pernoites para solteiro.</li>
              <li>Diárias para casal.</li>
              <li>Diárias para solteiro.</li>
            </ul>
          </div>
         
           
          
          <div className="col-md-6">
            <Card>
              <img
                className="card-image"
                src="./img/Hotel_Tulipa.gif"
                alt="foto logo hotel tulipa"
                height="500"
              />
            </Card>
          </div>
          
        </div>
      </div>
      {/* fim da primeira feature */}
    </>
  );
}
export default Feature;
