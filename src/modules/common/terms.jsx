import styled from "styled-components";
import Button from "../common/button";

const Container = styled.div`
  padding: 1rem;
`;

const Text = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectet. lorem ipsum dolor sit amet,
      consectet ipsum dolor sit amet et inter. Lorem ipsum dolor sit amet,
      consectet. lorem ipsum dolor sit amet, consectet ipsum dolor sit amet et
      inter
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectet. lorem ipsum dolor sit amet,
      consectet ipsum dolor sit amet et inter. Lorem ipsum dolor sit amet,
      consectet. lorem ipsum dolor sit amet, consectet ipsum dolor sit amet et
      inter
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectet. lorem ipsum dolor sit amet,
      consectet ipsum dolor sit amet et inter
    </p>
  </>
);

export default function Terms() {
  return (
    <Container>
      <Text />
      <Button>Accept</Button>
    </Container>
  );
}
