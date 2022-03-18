function Marketing() {
  return (
    <div>
      <h2 className="titulos"> O que temos por perto:</h2>
      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle circle"
              width="140"
              height="140"
              src="./img/academia.png"
              alt="icone de academia"
            />

            <h2>Academia</h2>
            <p className="paragraphs">
              Academia smartfit a 200 metros do hotel.
            </p>
          </div>
          {/* <!-- /.col-lg-4 --> */}
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle circle"
              width="140"
              height="140"
              src="./img/mercado.png"
              alt="icone de academia"
            />

            <h2>Mercado</h2>
            <p>Mercado extra do lado do nosso estabelecimento.</p>
          </div>
          {/* <!-- /.col-lg-4 --> */}
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle circle"
              width="140"
              height="140"
              src="./img/shopping.png"
              alt="icone de academia"
            />

            <h2>Shooping</h2>
            <p>Shooping Center da Penha localizado a 1,5km.</p>
          </div>
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle circle"
              width="140"
              height="140"
              src="./img/metro.png"
              alt="icone de academia"
            />

            <h2>Metrô</h2>
            <p>Próximo a estação do metrô Vila Matilde da linha vermelha.</p>
          </div>
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle circle"
              width="140"
              height="140"
              src="./img/centro.png"
              alt="icone de academia"
            />

            <h2>Centro</h2>
            <p>Próximo ao centro comercial da Penha.</p>
          </div>
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle circle"
              width="140"
              height="140"
              src="./img/restaurante.png"
              alt="icone de academia"
            />

            <h2>Restaurante</h2>
            <p>Restaurante e panificadora ao lado do hotel.</p>
          </div>

          {/* fim da .col-lg-4  */}
        </div>
        {/* fim da .row </div>  */}
      </div>
      <div>
        <a
          href="https://wa.me/5511974751884?text=Olá,%20gostaria%20de%20mais%20
              informações%20sobre%20hospedagem."
          target="blank"
          className="icons-contact"
        >
          <img
            src="./img/whatsapp.png"
            alt="icone WhatsApp"
            className="whatsapp-link"
          />
        </a>
      </div>
    </div>
  );
}
export default Marketing;
