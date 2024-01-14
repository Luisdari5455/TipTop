import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect,useState } from "react";
import styled from "styled-components";
import { useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";


import img1 from "../assets/Images/services/3.jpeg";
import img2 from "../assets/Images/services/5.jpeg";
import img3 from "../assets/Images/services/7.jpeg";
import img4 from "../assets/Images/services/8.jpeg";
import img5 from "../assets/Images/services/manteleria.jpg";
import img6  from "../assets/Images/services/decora.jpg";
import img7 from "../assets/Images/services/letrero.jpg";
import img8 from "../assets/Images/services/habitaciones.jpg";
import img9 from "../assets/Images/services/adorno.jpg";
import img10 from "../assets/Images/services/exteri.jpg";
import letrass from "../assets/Images/services/6.jpeg";
import col1 from "../assets/Images/services/columnas/1.jpeg";
import col2 from "../assets/Images/services/columnas/2.jpeg";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 490px;
    cursor: pointer;
  }

  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

const Product = ({ img, title = "", open, close, openli, arrim }) => {
console.log(arrim,"ver que le mando")
  return (
    <>
        <Lightbox
        open={openli}
        close={close}
        slides={arrim ? arrim : ""}
      /> 
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
     
      <img src={img} alt={title} onClick={open} />
 
      <h1>{title}</h1>
    </Item>
    </>
  );
};


const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);

  const columnas  = [
    { src: img2 },
    { src: col1 },

    { src: col2 },
  ]
  const carros= [
    { src: img1 },
    { src: img2 },
    // { src: img3 },
  ]
  const fondos= [
    { src: img1 },
    // { src: img2 },
    // { src: img3 },
  ]
  const manteles= [
    { src: img1 },
    // { src: img2 },
    // { src: img3 },
  ]
  const letrasne= [
      { src: img7 },
      { src: letrass },
   
      // { src: img3 },
 
  ]
  const imgage= [
    { src: img7 },
    { src: letrass },
 
    // { src: img3 },

]

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // locomotive element
          scrub: true,
          pin: true,
          // markers:true,
        },
        // we have to increase scrolling height of this section same as the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none,",
      });

      // Horizontal Scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // locomotive element
          scrub: true,

          // markers:true,
        },
        // we have to increase scrolling height of this section same as the scrolling element width
        x: -pinWrapWidth,
        ease: "none,",
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Let's clear instances
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
      our services
      </Title>
      <Left>
        <p>
        We offer beautiful decorations and party rentals, while keeping them at an affordable price
          <br />
          <br />
          We are very dedicated to making our products. We offer unique and creative . We have a variety of styles. We specialize in making things that make you happy.
        </p>
      </Left>
      <Right ref={horizontalRef}>

 
        <Product img={img1} title="Candy Cart" open={() => setOpen(true)} close={() => setOpen(false)} openli={open} arrim={carros}/>
        <Product img={img2} title="Ballon columns" open={() => setOpen1(true)} close={() => setOpen1(false)} openli={open1} arrim={columnas} />
        <Product img={img3} title="Sweatshirts" open={() => setOpen2(true)} close={() => setOpen2(false)} openli={open2} arrim={imgage}/>
        <Product img={img4} title="Ethnic Wear" open={() => setOpen3(true)} close={() => setOpen3(false)} openli={open3} arrim={imgage}/>
        <Product img={img5} title="Blazers" open={() => setOpen4(true)} close={() => setOpen4(false)} openli={open4} arrim={imgage}/>
        <Product img={img6} title="Suits" open={() => setOpen5(true)} close={() => setOpen5(false)} openli={open5} arrim={imgage}/>
        <Product img={img7} title="Antiques" open={() => setOpen6(true)} close={() => setOpen6(false)} openli={open6} arrim={letrasne}/>
        <Product img={img8} title="Jewellery" open={() => setOpen7(true)} close={() => setOpen7(false)} openli={open7} arrim={imgage}/>
        <Product img={img9} title="Watches" open={() => setOpen8(true)} close={() => setOpen8(false)} openli={open8} arrim={imgage}/>
        <Product img={img10} title="Special Edition" open={() => setOpen9(true)} close={() => setOpen9(false)} openli={open9} arrim={imgage}/>
      </Right>
    </Section>
  );
};

export default Shop;
