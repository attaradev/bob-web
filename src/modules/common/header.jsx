import styled from "styled-components";

const Container = styled.header`
  background-color: red;
  padding: 1rem;
`;

export default function Header() {
  return (
    <Container>
      <h1>Portail d'inscription</h1>
    </Container>
  );
}
