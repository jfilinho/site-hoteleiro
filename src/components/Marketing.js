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
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
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
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
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
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
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
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
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
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
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
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
          </div>

          {/* fim da .col-lg-4  */}
        </div>
        {/* fim da .row </div>  */}
      </div>
    </div>
  );
}
export default Marketing;
