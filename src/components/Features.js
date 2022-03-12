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
          </div>
          <div className="col-md-6">
            <Carousel>
              <Carousel.Item interval={2000}>
                <img
                  className="slide-social w-100"
                  src="./img/imagem3.jpg"
                  alt="First foto"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/paisagem.webp"
                  alt="Second foto"
                  height="497"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide-social w-100"
                  src="./img/imagem1.webp"
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
        <h2 className="titulos">Como Trabalhamos ?</h2>
        <div class="row featurette">
          <div className="col-md-6">
            <h2 className="featurette-heading">Aberto 24 horas.</h2>
            <p className="lead">
              Funcionamos a todo momento, para te atender em todos os momentos.
              Ligue e faça sua reserva pelo telefone, ou entre em contato pelo WhatsApp.
            </p>
          </div>
          <div className="col-md-6">
            <Card>
              <img
                className="card-image"
                src="./img/imagem3.jpg"
                alt="First foto"
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
