import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <Container className="contenedor-general d-flex" fluid>
      <Col className="flex-grow-1">
        <Col as="header" px-3 py-4>
          <h1>Título</h1>
        </Col>
        <Col as="main" className="flex-grow-1" id="main">
          <Row>
            <Col className="principal" xs={8}>
              <h2>Titular de la noticia</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio itaque
              laboriosam
              repellat quasi voluptatum
              asperiores suscipit in iste unde. Sed temporibus aliquam quam rem illo
              asperiores
              dolore labore accusantium quo!
        </p>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatum,
              autem
              veniam non at maxime, vero
              nobis
              accusamus officiis quia vitae explicabo! Rerum repellendus error sunt voluptatem
              harum? Libero, repellat?
        </p>
            </Col>
            <Col className="sidebar" xs={4}>
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
        </Col>
        <Col as="footer" px-3 py-4>
          <p className=""> Texto del footer</p>
        </Col>
      </Col>
    </Container>
  );
}

export default App;
