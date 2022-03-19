import { FaHeart } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";



function Rodape() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-filho-souza-silva-734773165/"
          className=" link-icone"
          title="linkedin"
        >
          <BsLinkedin size="40" color="#fff"/>
        </a>
        <a
          href="https://github.com/jfilinho"
          className=" link-icone"
          title="github"
        >
          <AiFillGithub size="40" color="#fff" />
        </a>

        <a href="https://www.instagram.com/filho_souzaa/">
          <FaInstagram size="40" color="#fff" />
        </a>

        <a
          href="https://www.facebook.com/jfilhossouza"
          className=" link-icone"
          title="Facebook"
        >
          <FaFacebook size="40" color="#fff" />
        </a>
      </div>
      <p className="footer__copyright">
          &copy; Copyright 2022 - Desenvolvido por - João Filho
      </p>
    </footer>
  );
}
export default Rodape;
