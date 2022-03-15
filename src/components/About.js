

function About(){
    return (
      <div>
        <h2 className="titulos">SOBRE</h2>
        <div className="container-fluid d-flex justify-content-center  mt-3 mb-3">
          <div className="row">
            <div className="col">
              <p className="description">
                Somos uma empresa com mais de duas décadas atendendo seus clientes,
                para oferecer o melhor conforto, tudo isso, com o melhor custo benefício
                da região.
                Uma Localização impecável, com facilidades para transportes
                públicos, centro, shopping, restaurantes, academia e supermercados.
                
              </p>
              <p className="description">
                Venha conhecer o nosso espaço, estamos funcionando 24 horas para
                te atender da melhor forma possível. Entre em contato com a gente pelo
                 whatsApp,telefone, facebook ou instagram.
              </p>
            </div>
            <div className="col-md-auto d-flex justify-content-center align-items-center">
              <img
                className="bd-placeholder-img rounded-circle circle"
                alt="img-circle"
                width="300"
                height="300"
                src="./img/Hotel_Tulipa.gif"
              />
            </div>
            
          </div>
        </div>
      </div>
    );
}
export default About;