import React from 'react';
import Layout from '../../components/Layout';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import florest from "../../components/images/florest.jpg";
import truck from "../../components/images/truck.jpg";
import claw from "../../components/images/claw.jpg";

function Home () {

    return(
        <Layout>
            <Carousel fade className="carousel-custom mt-3 mb-4">
                <Carousel.Item>
                    <img
                        src={florest}
                        alt="Florest"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <h3>Ecologia</h3>
                        <p>Presamos pela ecologia em nossos processos, sempre replantando.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={truck}
                        alt="Truck"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <h3>Transporte qualificado</h3>
                        <p>Possuímos uma logística de alto nível.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={claw}
                        alt="Claw"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <h3>Máquinas modernas</h3>
                        <p>As máquinas mais eficientes e modernas se encontram aqui.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Row>
                <Col className="mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>Como funciona nosso site</Card.Title>
                            <Card.Text>Coletamos dados dos equipamentos utilizados em uma operação florestal. Você poderá visualizar o histórico de posições e estados(operando, parado, manutenção)
                                desses quipamentos. Para facilitar imensamente a vida de nosso usuário disponibilizamos um mapa que mostra a posição  mais recente de cada equipamento,
                                essa funcionalidade você pode acessar clicando em <a href="/map">Mapa</a></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Sobre nós</Card.Title>
                            <Card.Text>Somos uma empresa de operação florestal comprometida com o manejo sustentável de florestas nativas e plantadas. Oferecemos soluções personalizadas, 
                                utilizando técnicas modernas e equipamentos de alta tecnologia, respeitando as leis e regulamentações ambientais.
                                 Nosso objetivo é garantir a eficiência e segurança em todas as operações, garantindo a satisfação dos nossos clientes.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <h1></h1>
        </Layout>
    )
}

export default Home;