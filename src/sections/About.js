import React from "react";
import styled from "styled-components";

import img1 from "../assets/Images/6about.jpeg";
import img2 from "../assets/Images/5about.jpeg";
import img3 from "../assets/Images/3.webp";
import img4 from "../assets/Images/1about.jpeg";

const Section = styled.section`
  position: relative;
  min-height: 110vh;
  width: 80vw;
  display: flex;

  margin: 0 auto;

  @media (max-width: 48em) {
    width: 90vw;
  }
  @media (max-width: 30em) {
    width: 100vw;
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;
const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    width: 70%;
  }
`;
const Right = styled.div`
  width: 50%;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 30%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 37%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100vh;
      object-fit: cover;
    }
    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;
      left: 60%;
      bottom: 20%;
    }
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
      Hi, my name is Maria! Owner of tiptop decorations and Rentals! Although my love for balloons and birthday celebrations have always been a very important part of my life, it wasn’t until 2019 that i decided to stay my small business!
       My main motivation for doing this was my son! I wanted to a be a full time mommy and also have a source of income!
       Starting my business has definitely given me that opportunity! and I will forever be grateful for all the clients that have supported me! 
       My main goal is to provide my clients with beautiful but yet affordable decorations for any special kind of event like birthday parties, baptisms, weddings, babyshower, gender reveals and much more!
        <br />

        <br />

      </Left>
      <Right>
        <img src={img4} alt="About Us" />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img1}
          className="small-img-1"
          alt="About Us"
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={img2}
          alt="About Us"
          className="small-img-2"
        />
      </Right>
    </Section>
  );
};

export default About;
