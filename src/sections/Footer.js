/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import styled from "styled-components";

import Logo from "../assets/Images/tiptop.png";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { AiFillFacebook,AiFillInstagram,AiOutlineWhatsApp} from "react-icons/ai";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }
  h3 {
    font-size: ${(props) => props.theme.fontxxl};
    font-family: "Kaushan Script";

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .social-icons{
    display: flex;
}
.social-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    font-family: "Halvetica Neue",sans-serif,"Arial";
    font-size: 2.5rem;
    text-decoration: none;
    transition: all 0.15s ease;
   
    border: 6px solid rgba(230,228,228);            
}
/* Tooltips */
.tooltip {
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    padding: 0.8rem 1rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: bold;
    opacity: 0;
    pointer-events: none;
    text-transform: uppercase;
    transform: translate(-50%, -100%);
    transition: all 0.3s ease;
    z-index: 1;
  }
  .tooltip:after {
    display: block;
    position: absolute;
    bottom: 1px;
    left: 50%;
    width: 0;
    height: 0;
    content: "";
    border: solid;
    border-width: 10px 10px 0 10px;
    border-color: transparent;
    transform: translate(-50%, 100%);
  }

/* color */
.social-icon--codepen{
    background: #000;
    color: #fff;
}
.social-icon--github{
    background: #4284c0;
    color: #fff;
}
.social-icon--whatsapp{
    background: #25D366;
    color: #fff;
}
.social-icon--youtube{
    background: #e1306c;
    color: white;
}
.social-icon--instagram{
    background: #e1306c;
    color: white;
}
.social-icon--facebook{
    background: #3b5a9b;
    color: white;
}
/* Hover Effect*/
.social-icon:hover .tooltip {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -150%);
}
.social-icon--codepen .tooltip{
    background: #000;
    columns: currentColor;
}
.social-icon--codepen .tooltip::after{
    border-top-color: black;
}

.social-icon--facebook .tooltip{
    background: #3b5a9b;
    columns: currentColor;
}
.social-icon--facebook .tooltip::after{
    border-top-color: #3b5a9a;
}
.social-icon--whatsapp .tooltip{
    background: #25D366;
    columns: currentColor;
}
.social-icon--whatsapp .tooltip::after{
    border-top-color: #25D366;
}

.social-icon--youtube .tooltip{
    background: #f31344;
    columns: currentColor;
}
.social-icon--youtube .tooltip::after{
    border-top-color: #f31344;
}

.social-icon--instagram .tooltip{
    background: #e1306c;
    columns: currentColor;
}
.social-icon--instagram .tooltip:after{
    border-top-color: #e1306c;
}


.social-icon--github .tooltip{
    background: #4284c0;
    columns: currentColor;
}
/* icon after effect */
.social-icon--github .tooltip::after{
    border-top-color: #4284c0;
}

`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);

    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        <img data-scroll data-scroll-speed="2" src={Logo} alt="Tip Top Decorations"  onClick={() => handleScroll("#home")}/>
        {/* <h3 data-scroll data-scroll-speed="-1">
         TipTop
        </h3> */}
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li onClick={() => handleScroll("#home")}>home</li>
          <li onClick={() => handleScroll(".about")}>about</li>
          <li onClick={() => handleScroll("#shop")}>Our Services</li>
          <li onClick={() => handleScroll("#new-arrival")}>Gallery</li>
          {/* <li>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              look book
            </a>
          </li>
          <li>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              reviews
            </a>
          </li> */}
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>


        </Bottom>

        <Social>


  
          <a href="https://www.instagram.com/tiptopdecorations18?igsh=NDlxZHQ4ZjRidmFw" className="social-icon social-icon--instagram">
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <div className="tooltip">Instagram </div>
            <AiFillInstagram />
            
          </a>
    
          <a    href="https://www.facebook.com/TiptopDecorations" className="social-icon social-icon--facebook">
            <AiFillFacebook />
            <div className="tooltip">Facebook </div>
   
          </a>

          <a   href="https:/wa.me/send?phone=18329355675&text=Hi! I need more information"  target="_blank" className="social-icon social-icon--whatsapp">
            <AiOutlineWhatsApp />
            <div className="tooltip">Whatsapp </div>
   
          </a>
    

      </Social>

      </FooterComponent>
    </Section>
  );
};

export default Footer;
