

function Contact() {

    return (
      <div>
        <h2 className="titulos">Entre em contatos:</h2>
        <div className="container-fluid contact">
          <div className="icones-contato">
            <a
              href="https://wa.me/5511974751884?text=Olá,%20gostaria%20de%20mais%20
              informações%20sobre%20hospedagem."
              target="blank"
              className="icons-contact"
            >
              <img
                src="./img/whatsapp.png"
                alt="icone WhatsApp"
                className="whatsapp"
              />
            </a>
            <span className="title-icones">WhatsApp</span>
            <p>
              Entre em contato pelo whatsapp a qualquer momento, te atendemos
               e tiramos suas dúvidas.
            </p>
          </div>
          <div className="icones-contato">
            <a
              href="https://www.facebook.com/Hotel-Tulipa-420425894772953"
              target="blank"
              className="icons-contact"
            >
              <img
                src="./img/facebook.png"
                alt="icone facebook"
                className="facebook"
              />
            </a>
            <span className="title-icones">Facebook</span>
            <p>
              Conheça também a nossa página no facebook. 
            </p>
          </div>
          <div className="icones-contato">
            <a
              href="https://www.instagram.com/hoteltulipa/"
              target="blank"
              className="icons-contact"
            >
              <img src="./img/instagram.jpg"
               alt="icone instagram"
               className="instagram"
               />
            </a>
            <span className="title-icones">Instagram</span>
            <p>
              Siga nossa página do instagram!!.
            </p>
          </div>
        </div>
      </div>
    );
}
export default Contact;