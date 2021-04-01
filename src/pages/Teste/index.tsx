import React from "react";
import "./style.css";

import CardHolder from "../../components/CardHolder";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

const Teste: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero title="" subtitle="" />
      <CardHolder title="O que estão doando na sua região" />
      <CardHolder title="Quem está precisando de doação na sua região" />
      <Footer />
    </>
  );
};

export default Teste;
