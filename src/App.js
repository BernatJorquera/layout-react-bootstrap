import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <Container className="contenedor-general d-flex flex-column" fluid>
      <Row as="header">
        <Col as="h1">Título</Col>
      </Row>
      <Row as="main">
        <Col as="section" className="principal" xs={12} md={8}>
          <h2>Titular de la noticia</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio itaque
            laboriosam
            repellat quasi voluptatum
            asperiores suscipit in iste unde. Sed temporibus aliquam quam rem illo
            asperiores
            dolore labore accusantium quo!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatum,
            autem
            veniam non at maxime, vero
            nobis
            accusamus officiis quia vitae explicabo! Rerum repellendus error sunt voluptatem
            harum? Libero, repellat?
          </p>
        </Col>
        <Col as="section" className="sidebar flex-grow-1" xs={12} md={4}>
          <h3>Categorías deporte</h3>
          <h4>Noticias de deporte</h4>
          <h4>Noticias de ocio</h4>
          <h4>Noticias de política</h4>
          <h4>Noiticias de espectáculos</h4>
          <h3>Otras cosas</h3>
          <h4>Nosequé</h4>
          <h4>Nosecuánto</h4>
          <h4 className="">Talycual</h4>
        </Col>
      </Row>
      <Row as="footer">
        <Col as="p" className="text-center"> Texto del footer</Col>
      </Row>
    </Container>
  );
}

export default App;
