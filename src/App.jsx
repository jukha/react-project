import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  border: solid;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <h2>Hello</h2>
          <h3>World</h3>
        </Row>
        <Row type="horizontal">
          <h2>ABC</h2>
          <h3>XYZ</h3>
        </Row>
        <h1>Hello</h1>
        <Heading>I am heading</Heading>
      </StyledApp>
    </>
  );
}

export default App;
