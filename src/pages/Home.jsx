import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import Working from "../components/Working";
import Done from "../components/Done";
import { Stlayout, StMain } from "../GlobalStyles";

function Home() {
  return (
    <>
      <Stlayout>
        <Header />
        <Form />
        <StMain>
          <Working />
          <Done />
        </StMain>
      </Stlayout>
    </>
  );
}

export default Home;
