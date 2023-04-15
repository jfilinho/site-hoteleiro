import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

function Feature() {
  return (
    <>
      <div className="container-fluid">
        <h2 className="titulos">Espaço Social</h2>
        <div className="row featurette espaco-social">
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
                  src="./img/frente1.png"
                  alt="Second foto"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/area_interna2.png"
                  alt="Third slide"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/area_interna1.png"
                  alt="Third slide"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/area_interna3.png"
                  alt="Third slide"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/area_recepcao1.png"
                  alt="Third slide"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/area_recepcao2.png"
                  alt="Third slide"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/sala_espera1.png"
                  alt="Third slide"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/sala_espera2.png"
                  alt="Third slide"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/corredor1.png"
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
        <div className="row featurette espaco-social">
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
