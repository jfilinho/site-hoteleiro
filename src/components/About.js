

function About(){
    return (
      <div>
        <h2 className="titulos">SOBRE</h2>
        <div className="container-fluid d-flex justify-content-center  mt-5 mb-5">
          <div className="row">
            <div className="col">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                sit amet, consect Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting.
              </p>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                sit amet, consect Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.Lorem ipsum dolor sit amet,
                consectetur adip lorem ipsum dolor sit amet, consect Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div className="col-md-auto d-flex justify-content-center align-items-center">
              <img
                className="bd-placeholder-img rounded-circle circle"
                alt="img-circle"
                width="390"
                height="390"
                src="./img/logo.gif"
              />
            </div>
          </div>
        </div>
      </div>
    );
}
export default About;