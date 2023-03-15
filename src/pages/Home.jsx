import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import Working from "../components/Working";
import Done from "../components/Done";
import { Stlayout, StMain } from "../GlobalStyles";

function Home({ data }) {
  return (
    <>
      <Stlayout>
        <Header />
        <Form />
        <StMain>
          <Working data={data} />
          <Done data={data} />
        </StMain>
      </Stlayout>
    </>
  );
}

export default Home;
