import { ImWhatsapp } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"; 


function Contact() {

    return (
      <div>
        <h2 className="titulos">Entre em contato conosco:</h2>
        <div className="container-fluid contact">
          <div className="icones-contato">
            <a
              href="https://wa.me/5511974751884?text=Olá,%20gostaria%20de%20mais%20
              informações%20sobre%20hospedagem."
              target="blank"
              className="icons-contact"
            >
              
              <ImWhatsapp className="whatsapp" />
            </a>
            <span className="title-icones">WhatsApp</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis, placeat maxime amet modi nobis commodi.
            </p>
          </div>
          <div className="icones-contato">
            <a
              href="https://www.facebook.com/Hotel-Tulipa-420425894772953"
              target="blank"
              className="icons-contact"
            >
              <FaFacebookF className="facebook" />
            </a>
            <span className="title-icones">Facebook</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis, placeat maxime amet modi nobis commodi.
            </p>
          </div>
          <div className="icones-contato">
            <a
              href="https://www.instagram.com/hoteltulipa/"
              target="blank"
              className="icons-contact"
            >
              <FaInstagram className="instagran" />
            </a>
            <span className="title-icones">Instagram</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis, placeat maxime amet modi nobis commodi.
            </p>
          </div>
        </div>
      </div>
    );
}
export default Contact;