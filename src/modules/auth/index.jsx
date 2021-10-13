import { useState } from "react";
import styled from "styled-components";
import Header from "../common/header";

const Container = styled.div`
  padding: 1rem;
`;

const NumberInput = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 0.5rem;
  border: 1px solid grey;
  margin: 1rem 0;

  input {
    border: none;
    background: transparent;
    outline: none;
  }
`;

export default function Authentication() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  return (
    <>
      <Header />
      <Container>
        <h2>Confirmer votre numero</h2>
        <p>
          Pour valider votre inscription, veuillez insérer votre numero Vodacom
          TV pour verification
        </p>
        <NumberInput>
          +243 <input type="tel" value={phone} />
        </NumberInput>
        <button>Envoyez le code de verification</button>
      </Container>
    </>
  );
}
